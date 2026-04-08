"use client";

import { motion } from "framer-motion";
import { Code2, PenTool } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Web Developer",
      role: "Lead Engineer",
      icon: <Code2 className="w-10 h-10 text-neon-cyan" />,
      description: "Ahli arsitektur aplikasi dan optimasi performa. Mengubah blueprint desain menjadi kenyataan interaktif dengan kode bersih.",
    },
    {
      name: "Graphic Designer",
      role: "Creative Director",
      icon: <PenTool className="w-10 h-10 text-neon-blue" />,
      description: "Visioner di balik setiap piksel. Berfokus pada tipografi, teori warna, dan menciptakan pengalaman pengguna yang mempesona.",
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="hidden md:block absolute top-1/2 left-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tim <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Inti</span> Kami
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Duo strategis yang siap mengeksekusi visi digital Anda. Kami berencana untuk terus berekspansi, namun kualitas selalu menjadi prioritas di atas segalanya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
          {/* Connector Line (Mobile hidden, Desktop visible) */}
          <div className="hidden md:block absolute top-[40%] left-1/4 right-1/4 h-1 bg-gradient-to-r from-neon-cyan/20 via-neon-cyan to-neon-blue/20 -z-10" />

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-3xl flex flex-col items-center relative group"
            >
              <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center mb-6 group-hover:border-neon-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500 relative z-10">
                {member.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <span className="text-neon-cyan font-medium mb-4 inline-block">{member.role}</span>
              <p className="text-slate-400 leading-relaxed text-center">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
