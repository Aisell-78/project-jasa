"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "Fintech Dashboard Pro",
      category: "Web Application",
      image: "bg-gradient-to-br from-slate-800 to-slate-900", // Placeholder for image
      accent: "from-blue-500 to-cyan-400",
    },
    {
      title: "E-Commerce Lifestyle",
      category: "Brand & Platform",
      image: "bg-gradient-to-br from-slate-800 to-slate-900",
      accent: "from-purple-500 to-pink-500",
    },
    {
      title: "Corporate Identity",
      category: "Company Profile",
      image: "bg-gradient-to-br from-slate-800 to-slate-900",
      accent: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Karya <span className="text-neon-blue">Terbaik</span> Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-xl text-lg"
            >
              Kumpulan proyek terpilih yang menunjukkan komitmen kami terhadap kualitas, performa, dan desain estetis.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="hidden md:inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors font-medium">
              Lihat Semua Proyek <ExternalLink size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden glass-card"
            >
              {/* Project Image Placeholder */}
              <div className={`w-full h-64 ${project.image} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-950/60 backdrop-blur-sm gap-4">
                  <button className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-sm font-medium text-neon-blue mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
