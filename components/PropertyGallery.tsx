"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const previewImages = images.slice(0, 4);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  const showPrevious = () => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
  };

  return (
    <>
      <div className="container property-gallery-shell">
        <div className={`property-gallery property-gallery-count-${previewImages.length}`}>
          {previewImages.map((image, index) => (
            <button
              className={`property-gallery-item property-gallery-item-${index + 1}`}
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Abrir imagen ${index + 1} de ${images.length}`}
            >
              <Image
                src={image}
                alt={`${title} — imagen ${index + 1}`}
                fill
                priority={index < 2}
                sizes={index === 0 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"}
              />
            </button>
          ))}
        </div>

        {images.length > 4 && (
          <button className="property-gallery-more" type="button" onClick={() => setActiveIndex(previewImages.length)}>
            <span>Ver más</span>
            <small>{images.length} fotografías</small>
          </button>
        )}
      </div>

      {activeIndex !== null && (
        <div className="property-lightbox" role="dialog" aria-modal="true" aria-label={`Galería de ${title}`}>
          <button className="property-lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Cerrar galería">×</button>
          <button className="property-lightbox-arrow property-lightbox-prev" type="button" onClick={showPrevious} aria-label="Imagen anterior">←</button>
          <div className="property-lightbox-image">
            <Image
              src={images[activeIndex]}
              alt={`${title} — imagen ${activeIndex + 1}`}
              fill
              priority
              sizes="100vw"
            />
          </div>
          <span className="property-lightbox-count">{activeIndex + 1} / {images.length}</span>
          <button className="property-lightbox-arrow property-lightbox-next" type="button" onClick={showNext} aria-label="Imagen siguiente">→</button>
        </div>
      )}
    </>
  );
}
