"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import AuthPage from "@/components/AuthPage";
import MainBirthday from "@/components/MainBirthday";

export default function Home() {
  const [stage, setStage] = useState<"splash" | "auth" | "main">("splash");

  return (
    <main className="min-h-screen bg-black overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {stage === "splash" && (
          <motion.div
            key="splash"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <SplashScreen onComplete={() => setStage("auth")} />
          </motion.div>
        )}

        {stage === "auth" && (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <AuthPage onUnlock={() => setStage("main")} />
          </motion.div>
        )}

        {stage === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-full w-full"
          >
            <MainBirthday />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
