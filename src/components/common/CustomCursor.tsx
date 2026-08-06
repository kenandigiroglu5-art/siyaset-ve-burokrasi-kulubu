"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouchDevice || prefersReducedMotion) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px) scale(1)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    // Event delegation so hover state works for elements added after mount
    // (mobile menu, search results, dynamically rendered cards, etc.).
    const handleOver = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest("a, button")) return;
      if (ringRef.current) {
        ringRef.current.style.transform += " scale(1.8)";
        ringRef.current.style.borderColor = "rgba(201,168,76,0.8)";
      }
    };

    const handleOut = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest("a, button")) return;
      if (ringRef.current) {
        ringRef.current.style.borderColor = "rgba(26,86,219,0.6)";
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    raf.current = requestAnimationFrame(animate);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf.current);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{ background: "white", transition: "opacity 0.2s" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99999]"
        style={{ border: "1.5px solid rgba(26,86,219,0.6)", transition: "border-color 0.3s, transform 0.08s" }}
      />
    </>
  );
}
