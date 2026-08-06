"use client";
import { motion } from "framer-motion";

// Deterministic pseudo-random in [0, 1) so server and client render identical values (avoids hydration mismatch).
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const glowingCities = [
  { cx: "23%", cy: "38%", label: "Washington" },
  { cx: "28%", cy: "34%", label: "New York" },
  { cx: "46%", cy: "29%", label: "London" },
  { cx: "48%", cy: "27%", label: "Brussels" },
  { cx: "51%", cy: "28%", label: "Berlin" },
  { cx: "50%", cy: "32%", label: "Istanbul" },
  { cx: "53%", cy: "36%", label: "Ankara" },
  { cx: "58%", cy: "34%", label: "Moscow" },
  { cx: "55%", cy: "45%", label: "Cairo" },
  { cx: "60%", cy: "38%", label: "Tehran" },
  { cx: "65%", cy: "38%", label: "Beijing" },
  { cx: "70%", cy: "42%", label: "Tokyo" },
  { cx: "62%", cy: "50%", label: "Delhi" },
  { cx: "55%", cy: "55%", label: "Dubai" },
  { cx: "50%", cy: "60%", label: "Nairobi" },
  { cx: "30%", cy: "58%", label: "Brasilia" },
  { cx: "70%", cy: "68%", label: "Sydney" },
];

export default function WorldMap() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* World map SVG background - simplified continents */}
      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.07 }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* North America */}
        <path d="M80,80 L180,60 L230,90 L250,140 L220,180 L200,200 L160,220 L120,210 L90,180 L70,140 Z" fill="rgba(26,86,219,0.8)" stroke="rgba(26,86,219,0.5)" strokeWidth="1" />
        {/* South America */}
        <path d="M180,250 L230,230 L260,270 L270,340 L250,380 L220,390 L190,370 L170,320 L165,280 Z" fill="rgba(26,86,219,0.8)" stroke="rgba(26,86,219,0.5)" strokeWidth="1" />
        {/* Europe */}
        <path d="M480,80 L560,70 L580,100 L570,130 L540,140 L510,130 L490,110 Z" fill="rgba(26,86,219,0.8)" stroke="rgba(26,86,219,0.5)" strokeWidth="1" />
        {/* Africa */}
        <path d="M490,180 L570,170 L600,220 L590,320 L560,360 L520,370 L490,340 L475,280 L480,220 Z" fill="rgba(26,86,219,0.8)" stroke="rgba(26,86,219,0.5)" strokeWidth="1" />
        {/* Asia */}
        <path d="M580,60 L900,50 L920,150 L880,200 L820,210 L750,190 L680,200 L630,180 L600,150 L575,110 Z" fill="rgba(26,86,219,0.8)" stroke="rgba(26,86,219,0.5)" strokeWidth="1" />
        {/* Australia */}
        <path d="M820,320 L920,310 L940,360 L920,400 L870,410 L830,390 L810,360 Z" fill="rgba(26,86,219,0.8)" stroke="rgba(26,86,219,0.5)" strokeWidth="1" />
        {/* Grid lines */}
        <line x1="0" y1="150" x2="1200" y2="150" stroke="rgba(26,86,219,0.2)" strokeWidth="0.5" />
        <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(26,86,219,0.2)" strokeWidth="0.5" />
        <line x1="0" y1="450" x2="1200" y2="450" stroke="rgba(26,86,219,0.2)" strokeWidth="0.5" />
        <line x1="300" y1="0" x2="300" y2="600" stroke="rgba(26,86,219,0.2)" strokeWidth="0.5" />
        <line x1="600" y1="0" x2="600" y2="600" stroke="rgba(26,86,219,0.2)" strokeWidth="0.5" />
        <line x1="900" y1="0" x2="900" y2="600" stroke="rgba(26,86,219,0.2)" strokeWidth="0.5" />
      </svg>

      {/* Glowing city dots */}
      {glowingCities.map((city, i) => {
        // Rounded to 2 decimals: the browser re-serializes long float CSS values with less
        // precision than we compute, which otherwise makes the hydration check see a mismatch.
        const pulseDuration = Number((2 + seededRandom(i) * 2).toFixed(2));
        const pulseDelay = Number((seededRandom(i + 100) * 2).toFixed(2));
        const pingDuration = (2 + seededRandom(i + 200) * 2).toFixed(2);
        return (
          <motion.div
            key={city.label}
            className="absolute"
            style={{ left: city.cx, top: city.cy }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: pulseDuration, repeat: Infinity, delay: pulseDelay }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: city.label === "Istanbul" || city.label === "Ankara" ? "#c9a84c" : "#1a56db" }}
              />
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  backgroundColor: city.label === "Istanbul" || city.label === "Ankara" ? "rgba(201,168,76,0.4)" : "rgba(26,86,219,0.4)",
                  width: "200%",
                  height: "200%",
                  top: "-50%",
                  left: "-50%",
                  animationDuration: `${pingDuration}s`,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connection lines from Istanbul */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
        <motion.line x1="53%" y1="32%" x2="46%" y2="29%" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4,4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }} />
        <motion.line x1="53%" y1="32%" x2="60%" y2="38%" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4,4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.8 }} />
        <motion.line x1="53%" y1="32%" x2="55%" y2="45%" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4,4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 2.0 }} />
        <motion.line x1="53%" y1="32%" x2="23%" y2="38%" stroke="rgba(26,86,219,0.6)" strokeWidth="0.5" strokeDasharray="4,4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 2.2 }} />
      </svg>
    </div>
  );
}
