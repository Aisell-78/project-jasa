"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, PenTool } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Pengembangan website modern dengan teknologi mutakhir (Next.js, React). Kami menjamin performa cepat, SEO-friendly, dan arsitektur kode yang solid.",
      icon: <MonitorSmartphone className="w-8 h-8 text-neon-cyan" />,
      features: ["Performa Tinggi", "Responsif di Semua Perangkat", "SEO Teroptimasi", "Arsitektur Modern"],
    },
    {
      title: "UI/UX & Graphic Design",
      description: "Desain visual yang tidak hanya indah, tapi juga fungsional. Kami menciptakan pengalaman pengguna yang intuitif untuk meningkatkan konversi.",
      icon: <PenTool className="w-8 h-8 text-neon-blue" />,
      features: ["Desain Premium", "Prototyping Interaktif", "Branding Identity", "Fokus pada Konversi"],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Layanan <span className="text-neon-cyan">Utama</span> Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Kombinasi sempurna antara teknikalitas programming dan estetika desain untuk menghasilkan produk digital kelas dunia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-10 group hover:-translate-y-2 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                {service.icon}
              </div>
              
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:border-neon-cyan/50 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
