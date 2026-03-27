"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, ArrowRight, XCircle } from "lucide-react";

interface AuthPageProps {
  onUnlock: () => void;
}

const validNames = ["gowtham", "gowtham kumar", "pulluri gowtham kumar"];

export default function AuthPage({ onUnlock }: AuthPageProps) {
  const [inputValue, setInputValue] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedInput = inputValue.trim().toLowerCase();
    
    if (validNames.includes(formattedInput)) {
      onUnlock();
    } else {
      setErrorStatus(true);
      setTimeout(() => setErrorStatus(false), 2000); // clear after 2 seconds
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#0f172a] p-4 relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        className="w-full max-w-md relative z-10"
        animate={errorStatus ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400/50 shadow-[0_0_15px_rgba(192,132,252,0.5)]"
            >
              <Lock className="w-8 h-8 text-purple-300" />
            </motion.div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2 selection:bg-purple-500/30">
            Security Check
          </h2>
          <p className="text-purple-200/70 text-center mb-8 text-sm md:text-base selection:bg-purple-500/30">
            Mention the Name of the Employee to gain access.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Employee Name..."
                className="w-full bg-black/20 border border-purple-500/30 text-white placeholder-purple-100/30 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 shadow-inner"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" style={{ filter: "blur(10px)", zIndex: -1 }} />
            </div>

            <div className="h-6">
              <AnimatePresence>
                {errorStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center text-red-400 space-x-2 text-sm font-medium"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Access Denied Manager 😅</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(232,121,249,0.4)] group hover:shadow-[0_0_30px_rgba(232,121,249,0.7)] transition-all duration-300"
              type="submit"
            >
              <span className="relative z-10">Verify & Enter</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              
              {/* Ripple Effect Background Container */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
