"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const CONSENT_KEY = "acutis_analytics_consent";
const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000;

type ConsentChoice = "granted" | "denied";
type StoredConsent = { choice: ConsentChoice; timestamp: number };

function readStoredConsent(): ConsentChoice | null {
  try {
    const stored = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null") as StoredConsent | null;
    if (!stored || Date.now() - stored.timestamp > CONSENT_DURATION) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return stored.choice;
  } catch {
    localStorage.removeItem(CONSENT_KEY);
    return null;
  }
}

function saveConsent(choice: ConsentChoice) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, timestamp: Date.now() }));
}

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name?.startsWith("_ga")) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.acutisinmobiliaria.com; SameSite=Lax`;
  });
}

export function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsReady, setAnalyticsReady] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  const loadAnalytics = useCallback(() => {
    if (window.gtag) {
      setAnalyticsReady(true);
      return;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.id = "acutis-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    setAnalyticsReady(true);
  }, [measurementId]);

  useEffect(() => {
    const openSettings = () => setIsOpen(true);
    document.addEventListener("acutis:open-cookie-settings", openSettings);
    const initialize = window.setTimeout(() => {
      const storedConsent = readStoredConsent();
      if (storedConsent === "granted") loadAnalytics();
      if (storedConsent === null) setIsOpen(true);
    }, 0);

    return () => {
      window.clearTimeout(initialize);
      document.removeEventListener("acutis:open-cookie-settings", openSettings);
    };
  }, [loadAnalytics]);

  useEffect(() => {
    if (!analyticsReady || lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [analyticsReady, pathname]);

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest("[data-cookie-settings]")) {
        setIsOpen(true);
        return;
      }

      const link = target?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (link.classList.contains("whatsapp-float") || href.includes("wa.me/")) {
        trackEvent("click_whatsapp");
      } else if (href.startsWith("tel:")) {
        trackEvent("click_phone");
      } else if (href.includes("ejemplo-estudio-mercado-acutis.pdf")) {
        trackEvent("download_study");
      } else if (link.closest(".footer-socials")) {
        const platform = ["instagram", "linkedin", "facebook", "tiktok"].find((name) => href.includes(name));
        trackEvent("click_social", { platform: platform ?? "social" });
      }
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  function acceptAnalytics() {
    saveConsent("granted");
    loadAnalytics();
    setIsOpen(false);
  }

  function rejectAnalytics() {
    const wasLoaded = typeof window.gtag === "function";
    saveConsent("denied");
    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    clearAnalyticsCookies();
    setIsOpen(false);
    if (wasLoaded) window.location.reload();
  }

  if (!isOpen) return null;

  return (
    <aside className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-description">
      <div className="cookie-consent-copy">
        <span className="cookie-consent-eyebrow">Privacidad y medición</span>
        <h2 id="cookie-consent-title">Tú decides si medimos la visita.</h2>
        <p id="cookie-consent-description">
          Usamos Google Analytics solo para entender el uso de la web y mejorarla. No se activa hasta que aceptes y no utilizamos cookies publicitarias. Puedes cambiar tu decisión cuando quieras en el pie de página. <Link href="/cookies">Ver política de cookies</Link>.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-button is-secondary" onClick={rejectAnalytics}>Rechazar</button>
        <button type="button" className="cookie-consent-button is-primary" onClick={acceptAnalytics}>Aceptar analíticas</button>
      </div>
    </aside>
  );
}
