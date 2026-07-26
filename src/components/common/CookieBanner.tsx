"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setTimeout(() => setVisible(true), 2500);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9997] w-full max-w-lg mx-4"
          style={{ padding: "0 1rem" }}
        >
          <div
            className="rounded-2xl p-4 flex items-center gap-4"
            style={{ background: "rgba(13,31,60,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)" }}>
              <Cookie size={16} style={{ color: "#c9a84c" }} />
            </div>
            <p className="text-sm flex-1" style={{ color: "rgb(138,155,184)" }}>
              Deneyiminizi iyileştirmek için çerezler kullanıyoruz.{" "}
              <a href="#" className="underline" style={{ color: "#c9a84c" }}>Gizlilik politikası</a>
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={accept}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ background: "linear-gradient(135deg, #1a56db, #0a3d9e)", color: "white" }}
              >
                Kabul Et
              </button>
              <button onClick={accept} className="p-2 rounded-lg" style={{ color: "rgb(138,155,184)" }}>
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
