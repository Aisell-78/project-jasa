"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] -z-10" />
      <div className="hidden md:block absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-700/50 text-neon-cyan text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Tentang Kita</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Mengenal Lebih Dekat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Filosofi NexCodea
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Kami bukan sekadar agensi pembuat website. Kami adalah mitra teknologi Anda yang menerjemahkan visi bisnis menjadi realitas digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Logo Showcase */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="relative flex justify-center items-center"
          >
            <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-cyan/20 rounded-[3rem] blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="glass p-12 md:p-16 rounded-[3rem] border border-slate-700/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center gap-8">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.4)] transform group-hover:rotate-3 transition-transform duration-500">
                  <Image src="/logo.jpg" alt="NexCodea Logo" width={208} height={208} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:text-neon-cyan transition-colors duration-500">
                  NexCodea
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Content */}
          <motion.div
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, margin: "-50px" }}
             className="space-y-8"
          >
            <motion.div variants={fadeIn} className="glass p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-neon-cyan border border-slate-800 overflow-hidden">
                <Image src="/logo.jpg" alt="NC logo" width={48} height={48} className="w-full h-full object-contain p-1" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Makna Simbol Code</h4>
              <p className="text-slate-400 leading-relaxed">
                Simbol <span className="font-mono text-neon-cyan/80">{"NC"}</span> merepresentasikan inti dari pekerjaan kami: kode program yang kokoh, terstruktur, dan inovatif. Ini melambangkan fondasi teknis yang kuat di setiap karya yang kami hasilkan.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="glass p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-neon-blue border border-slate-800">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Filosofi "NexCodea"</h4>
              <p className="text-slate-400 leading-relaxed">
                Gabungan dari <strong className="text-white">"Next"</strong> (Masa Depan) dan <strong className="text-white">"Code"</strong> (Kode), diakhiri dengan <strong className="text-white">"a"</strong> untuk melambangkan agensi/art. Kami merancang solusi teknologi yang siap menghadapi masa depan dengan nilai estetika tinggi.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="glass p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-slate-800">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Visi Estetika & Fungsionalitas</h4>
              <p className="text-slate-400 leading-relaxed">
                Warna neon cyan dan blue cerminan dari inovasi, pemikiran jernih, dan energi kreatif tanpa batas. Kami percaya desain premium harus berjalan beriringan dengan performa yang tak tertandingi.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
