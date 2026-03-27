"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import MessageSection from "./MessageSection";

export default function MainBirthday() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setIsMounted(true);
    // Attempt autoplay once mounted
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const petals = Array.from({ length: 30 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1b4b] via-[#1e1b4b] to-[#0f172a] overflow-hidden relative selection:bg-purple-500/30 w-full font-sans">
      
      {/* Background Music Player */}
      <audio 
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/03/15/audio_eadd25d6b4.mp3" // Romantic/Emotional background royalty-free track
        loop
      />
      
      {/* Audio Control Floating Button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(192,132,252,0.5)]"
      >
        {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </motion.button>

      {/* Floating Petals/Leaves Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {isMounted && petals.map((_, i) => (
          <motion.div
            key={i}
            className="absolute shadow-[0_0_10px_rgba(192,132,252,0.4)]"
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 12 + "px",
              left: Math.random() * 100 + "vw",
              top: "-5vh",
              backgroundColor: i % 3 === 0 ? "#c084fc" : i % 3 === 1 ? "#a855f7" : "#d8b4fe",
              borderRadius: "50% 0 50% 0", // Leaf shape
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: ["-5vh", "110vh"],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}

        {/* Floating Hearts/Sparkles Background blur */}
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-purple-300 blur-xl"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              left: Math.random() * 100 + "vw",
              top: Math.random() * 100 + "vh",
              opacity: Math.random() * 0.1,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Main Hero Section */}
        <motion.section 
          style={{ opacity, scale }}
          className="min-h-screen w-full flex flex-col items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Sparkles className="w-10 h-10 text-purple-300 animate-bounce" />
            </div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-purple-300 to-fuchsia-600 drop-shadow-[0_0_20px_rgba(192,132,252,0.5)] mb-6 py-2 px-4"
              animate={{ textShadow: ["0 0 20px #c084fc", "0 0 50px #e879f9", "0 0 20px #c084fc"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              Happy Birthday <br className="md:hidden" /> Manager 🎂💜
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-purple-200/80 text-xl md:text-2xl mt-4 font-light tracking-wide max-w-2xl mx-auto"
            >
              Celebrating a Happiest day of The Manager !
            </motion.p>
          </motion.div>
          
          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60"
          >
            <span className="text-white text-sm tracking-widest font-mono uppercase">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-purple-400 to-transparent"
            />
          </motion.div>
        </motion.section>

        {/* Message Section */}
        <MessageSection />
        
        {/* Footer */}
        <footer className="w-full py-10 bg-black/40 border-t border-purple-900/50 mt-10 backdrop-blur-md text-center z-10 relative">
          <p className="text-purple-500/70 text-sm tracking-wider font-light flex items-center justify-center gap-2">
            Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>💜</motion.span> by your Employee
          </p>
        </footer>
      </main>

    </div>
  );
}
