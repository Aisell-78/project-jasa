"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background glowing effects */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] -z-10" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-neon-cyan/30"
        >
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm font-medium text-slate-300">
            Web Developer & Graphic Designer Duo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Membangun Pengalaman Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Tanpa Batas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Kami merealisasikan visi Anda melalui desain memukau dan performa web optimal.
          Solusi premium untuk bisnis yang ingin tampil beda di era digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://wa.me/625756365672"
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-cyan text-slate-950 rounded-full font-bold text-lg overflow-hidden transition-all hover:bg-neon-blue hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]"
          >
            <span>Mulai Proyek</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg text-white border-2 border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all"
          >
            Lihat Karya Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
