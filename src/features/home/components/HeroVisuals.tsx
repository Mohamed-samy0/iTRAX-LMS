"use client";

import Image from "next/image";
import { motion, Transition } from "framer-motion"
import { Camera, Phone, Mic } from "lucide-react";

export function HeroVisuals() {
  const floatingAnimation = (delay: number) => ({
    animate: { y: [0, -10, 0] },
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay,
    } as Transition,
  });

  return (
    <div className="relative mt-16 w-full max-w-2xl mx-auto flex justify-center items-center">
      <div className="relative z-10 rounded-3xl bg- shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden w-[260px] sm:w-[320px]">
        <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-[#edf7fa]/70 to-white">
          <Image
            src="/assets/images/person.png"
            alt="Tutor teaching online Worldwide"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-lg border border-slate-100">
          <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
            <Camera className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
            <Phone className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
            <Mic className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          className="absolute right-4 top-4 z-20"
          {...floatingAnimation(0)}
        >
          <div className="bg-[#5AD951]/10 text-[#5AD951] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#CDECCB] shadow-sm">
            49 min
          </div>
        </motion.div>

        <motion.div
          className="absolute left-4 top-4 z-20"
          {...floatingAnimation(0.5)}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-white">
            <Image
              src="/assets/images/Ellipse 1.png"
              alt="Student avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute -right-4 sm:-right-8 lg:-right-12 bottom-50 z-20"
        {...floatingAnimation(1)}
      >
        <div className="flex items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1.5 shadow-xl border border-slate-100/50">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/images/Ellipse 1.png"
                alt=""
                width={28}
                height={28}
                className="object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/assets/images/Ellipse 1.png"
                alt=""
                width={28}
                height={28}
                className="object-cover"
              />
            </div>
          </div>
          <span className="text-[#0A629C] font-bold text-sm">+1200</span>
        </div>
      </motion.div>
    </div>
  );
}
