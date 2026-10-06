type PropertyDetailIconProps = {
  detail: string;
};

export function PropertyDetailIcon({ detail }: PropertyDetailIconProps) {
  const value = detail.toLocaleLowerCase("es");
  const common = {
    className: "property-detail-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (value.includes("dormitorio")) {
    return <svg {...common}><path d="M3 18v-7m18 7v-5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v5M3 15h18M6 10V7h4a2 2 0 0 1 2 2v1" /></svg>;
  }
  if (value.includes("baño")) {
    return <svg {...common}><path d="M4 13h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2Zm2 0V7a3 3 0 0 1 5.5-1.7M7 19v2m10-2v2M15 8h3" /></svg>;
  }
  if (value.includes("garaje")) {
    return <svg {...common}><path d="m5 16 1.4-5.2A2.5 2.5 0 0 1 8.8 9h6.4a2.5 2.5 0 0 1 2.4 1.8L19 16M4 16h16v3H4v-3Zm2 3v2m12-2v2M7 16h.01M17 16h.01" /></svg>;
  }
  if (value.includes("piscina")) {
    return <svg {...common}><path d="M4 7h5v8m0-5h6V6a2 2 0 0 1 4 0M3 17c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0M3 21c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" /></svg>;
  }
  if (value.includes("jardín")) {
    return <svg {...common}><path d="M12 21V10m0 5c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7Zm0-3c0-4.5 2.5-7 7-7 0 4.5-2.5 7-7 7Z" /></svg>;
  }
  if (value.includes("aire")) {
    return <svg {...common}><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.8 5.2 12 7.4l2.2-2.2M9.8 18.8l2.2-2.2 2.2 2.2M5.1 10.5l3 .8-.8-3M18.9 13.5l-3-.8.8 3" /></svg>;
  }
  if (value.includes("útiles")) {
    return <svg {...common}><path d="M9 4H4v5m11-5h5v5M9 20H4v-5m11 5h5v-5M8 8l-4-4m12 4 4-4M8 16l-4 4m12-4 4 4" /></svg>;
  }
  if (value.includes("m²") || value.includes("construid")) {
    return <svg {...common}><path d="M4 4h16v16H4zM8 4v16m8-16v16M4 8h16m-16 8h16" /></svg>;
  }

  return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="m9 12 2 2 4-4" /></svg>;
}
