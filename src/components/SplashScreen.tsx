"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Fire some elegant purple/gold confetti resembling fireworks/crackers
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#a855f7", "#9333ea", "#d8b4fe", "#fbbf24"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#a855f7", "#9333ea", "#d8b4fe", "#fbbf24"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    const timer = setTimeout(() => {
      handleComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onComplete, 800); // Wait for exit animation
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={handleComplete}
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#1e1b4b] z-50 cursor-pointer overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-[#1e1b4b] to-[#1e1b4b]"></div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 z-0 opacity-50">
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-400"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 mb-6 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]"
          animate={{ textShadow: ["0 0 10px #c084fc", "0 0 30px #a855f7", "0 0 10px #c084fc"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Happy Birthday <br className="md:hidden" /> Manager 🎉
        </motion.h1>
        <motion.p 
          className="text-purple-200/60 mt-8 text-sm md:text-base tracking-widest uppercase font-mono"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tap anywhere to continue
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
