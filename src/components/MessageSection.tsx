"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Heart } from "lucide-react";

export default function MessageSection() {
  return (
    <section className="py-24 relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center space-x-3 mb-4">
          <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]">
            A Special Message from The Employee
          </h2>
          <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="w-full relative group"
      >
        {/* Animated ambient glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" style={{ animationDuration: '3s' }}></div>
        
        <div className="relative bg-[#1e1b4b]/80 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(232,121,249,0.3)]">
          
          <div className="absolute -top-6 -right-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-purple-500/20 p-4 rounded-full border border-purple-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(192,132,252,0.5)]"
            >
              <Mail className="w-8 h-8 text-purple-300" />
            </motion.div>
          </div>

          <p className="text-purple-100 text-lg md:text-2xl leading-relaxed text-center font-medium opacity-90 indent-8 mb-6">
            "Wish You a Happy Birthday Manager !!! I wish you will have a wonderful future ahead... I am writing this as a memory of our friendship ... Maybe manam CSP ki Kalisam kadha ... we would not talk like this today if we were not in the same team that day ... Thanks to Akshaya ... I know how you are in the starting ... chaala tough .. asalu naku friends leru, andharu classmates ye ... naku trust issues ani chaala chepav .. sare le nvu chaala tough girl la unnav anukuna ... but anukuna daani kante tough ... epudu ela matladalo naku kuda ardham ayedhi kadhu ...  eppudu ela godava avvutundo telidhu baboie ... enni sarlu godava ayyindo naku kuda telidhu .. sometimes we didn't talk for months ... naku gurtundhi .... but malli kalisam ... konnisarlu kopam ochedhi .. aa sai gadu .. rayyan gadu .. inka kontamandi .. netho flirt chesela matladataru ... valani emina ante .. malli neku naku risk .. anduke valatho nenu eppudo matladatam manesa ... block kuda chesisanu.. insta lo unfollow .. manam college lo kalisi matladindi em undadu .. motham whatsapp ye untundhi 😅 ... sare le inka adhi na fate ... kalisi unte em matlada ina ... naku matladataniki em radhu matalu ... I feel very happy every time I talk to you ... ipudu Btech ipoyindi ... malli manam kalustamo ledho kuda telidhu ... college lo ne manam kalavatam ayyedhu kaadhu kadha ... but i always wait for your msg which brings happiness to me .. burden eppudu feel avvala ... neku ala anipinchina kuda ... Anyway ... Nannu kalisinanduku chaala thanks ... nenu eppudu low ga feel ayyina ... ne msg okati ochedi telusa ..I feel normal again.. because you talk like a kid ... nachutundi naku ala ...  anduke neku custom notification pettanu .. eppudu aa notification ochina .. oka chinna smile ... Anyway .. ne birthday ni happy ga enjoy cheyyi ... life lo eppudu low feel ayyina, problem ochina ... em issue unna first neku nvu solve chesko .. nvu chesukogalavu .. aa tarvata list lo nenu unte .. naku chepu ... and Raasi petti unte ... epudina kalisi matladam.. And malli em godava ochina ... everi tappu unna .. malli block and contact remove cheste bagodhu cheptuna 😒... It is being very happy talking to you Manager ...Enjoy the Day ... I hope you will not forget me ... and Finally ... Happy Birthday my Best Friend, Manager , Margadarhini ...  I wish you will get whatever that brings you Happiness in your life ... ☺️"
          </p>

          <p className="text-purple-300/80 text-center text-sm md:text-base italic mb-8">
            - With best wishes from your Employee
          </p>
          
          <div className="flex justify-center mt-6">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                filter: ["drop-shadow(0 0 5px rgba(239,68,68,0.5))", "drop-shadow(0 0 15px rgba(239,68,68,0.8))", "drop-shadow(0 0 5px rgba(239,68,68,0.5))"]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Heart className="w-10 h-10 text-red-500 fill-red-500" />
            </motion.div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
