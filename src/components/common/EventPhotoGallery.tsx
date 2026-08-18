"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

export default function EventPhotoGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative overflow-hidden rounded-xl group aspect-[4/3]"
            style={{ border: "1px solid var(--border-1)" }}
            aria-label={`${title} fotoğrafı ${i + 1} - büyüt`}
          >
            <Image
              src={src}
              alt={`${title} - fotoğraf ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(8,21,46,0.55)" }}
            >
              <Expand size={20} style={{ color: "var(--color-text-primary)" }} />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(8,21,46,0.94)" }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} fotoğraf galerisi`}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full transition-colors"
              style={{ background: "var(--surface-3)", color: "var(--color-text-primary)" }}
              aria-label="Kapat"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full transition-colors"
                style={{ background: "var(--surface-3)", color: "var(--color-text-primary)" }}
                aria-label="Önceki fotoğraf"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`${title} - fotoğraf ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full transition-colors"
                style={{ background: "var(--surface-3)", color: "var(--color-text-primary)" }}
                aria-label="Sonraki fotoğraf"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {images.length > 1 && (
              <div
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs"
                style={{ background: "var(--surface-3)", color: "var(--color-text-muted)" }}
              >
                {activeIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
