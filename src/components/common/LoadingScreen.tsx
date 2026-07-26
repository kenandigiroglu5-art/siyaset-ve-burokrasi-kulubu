"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "rgb(8, 21, 46)" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-12"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(26,86,219,0.3), rgba(201,168,76,0.3))", border: "1px solid rgba(201,168,76,0.3)" }}>
                <span className="text-2xl font-bold" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d483)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SBK</span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ background: "radial-gradient(circle, rgba(201,168,76,0.2), transparent)", filter: "blur(8px)" }}
              />
            </div>
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "rgb(138, 155, 184)" }}>İstanbul Medeniyet Üniversitesi</p>
              <h2 className="text-lg font-semibold tracking-wide" style={{ color: "rgb(248, 250, 252)" }}>Siyaset ve Bürokrasi Kulübü</h2>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-48 flex flex-col items-center gap-3"
          >
            <div className="w-full h-[1px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ width: `${Math.min(progress, 100)}%`, background: "linear-gradient(90deg, #1a56db, #c9a84c)" }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <span className="text-xs tabular-nums" style={{ color: "rgb(138, 155, 184)" }}>{Math.min(Math.round(progress), 100)}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
