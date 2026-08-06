"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/common/ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 ${className}`}
      style={{ background: "var(--surface-5)", color: "var(--color-text-body)" }}
      suppressHydrationWarning
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
