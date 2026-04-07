"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  accent: string;
  hasRealImage: boolean;
  tags: string[];
  description: string;
  tech: string[];
  duration: string;
  client: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Waroeng Coffee Heritage",
    category: "Company Profile",
    image: "/project_waroeng_coffee.png",
    accent: "from-amber-700 to-yellow-600",
    hasRealImage: true,
    tags: ["Coffee Shop", "Landing Page", "Next.js"],
    description:
      "Website premium untuk Waroeng Coffee Heritage, sebuah brand kopi lokal dengan identitas kuat bertema heritage dan modern. Kami membangun website menggunakan Next.js dengan desain yang menonjolkan kedalaman visual lewat warna cokelat hangat, tipografi elegan, dan animasi halus. Fokus pada storytelling brand untuk menarik pelanggan dan memperkenalkan menu unggulan secara digital.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    duration: "3 Minggu",
    client: "Waroeng Coffee Heritage",
    year: "2025",
  },
  {
    id: 2,
    title: "E-Commerce Lifestyle",
    category: "Brand & Platform",
    image: "/project_ecommerce.png",
    accent: "from-purple-500 to-pink-500",
    hasRealImage: true,
    tags: ["E-Commerce", "UI/UX", "Branding"],
    description:
      "Platform belanja online premium untuk brand fashion lokal. Kami mendesain ulang pengalaman belanja dari awal — mulai dari landing page, halaman produk, hingga checkout flow. Desain menggunakan estetika minimalis dengan aksen warna purple-pink yang mencerminkan identitas brand muda dan modern.",
    tech: ["Next.js", "Prisma", "Stripe", "Cloudinary", "PostgreSQL"],
    duration: "4 Bulan",
    client: "Stylehaus Brand",
    year: "2024",
  },
  {
    id: 3,
    title: "Bina Karya Corporate Website",
    category: "Company Profile",
    image: "/project_corporate_new.png",
    accent: "from-emerald-400 to-teal-500",
    hasRealImage: true,
    tags: ["Company Profile", "Web Design", "SEO"],
    description:
      "Website profil perusahaan modern yang kami bangun secara custom. Kami merancang antarmuka profesional dan bersih dengan struktur konten yang kuat untuk menonjolkan nilai perusahaan. Dilengkapi animasi halus untuk kesan premium dan optimasi SEO tingkat tinggi yang siap bersaing di halaman pencarian.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    duration: "4 Minggu",
    client: "PT Bina Karya",
    year: "2024",
  },
  {
    id: 4,
    title: "Analytica SaaS Dashboard",
    category: "Web Application",
    image: "/project_saas.png",
    accent: "from-indigo-500 to-violet-500",
    hasRealImage: true,
    tags: ["SaaS", "Analytics", "React"],
    description:
      "Proyek aplikasi web SaaS yang kami kembangkan lengkap dengan dashboard interaktif. Menampilkan visualisasi data komprehensif, manajemen laporan, dan metrik performa pengguna secara real-time. Antarmuka didesain dengan gaya dark mode yang elegan untuk menjaga kenyamanan mata pengguna.",
    tech: ["React", "Next.js", "Prisma", "TailwindCSS"],
    duration: "6 Minggu",
    client: "Internal Project",
    year: "2024",
  },
  {
    id: 5,
    title: "FitLife App Landing Page",
    category: "Landing Page",
    image: "/project_mobile.png",
    accent: "from-rose-500 to-orange-400",
    hasRealImage: true,
    tags: ["Landing Page", "Mobile App", "UI/UX"],
    description:
      "Halaman peluncuran aplikasi mobile dengan pendekatan konversi tinggi. Desain kami buat interaktif dan hidup (vibrant) untuk menonjolkan fitur-fitur aplikasi. Termasuk integrasi sistem waitlist, animasi scroll yang mulus, dan responsivitas sempurna di perangkat smartphone.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    duration: "2 Minggu",
    client: "FitLife",
    year: "2024",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsZoomed(false);
    setZoomLevel(1);
    setActiveIndex(projects.findIndex((p) => p.id === project.id));
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setIsZoomed(false);
    setZoomLevel(1);
    document.body.style.overflow = "";
  }, []);

  const navigateProject = useCallback(
    (dir: "prev" | "next") => {
      const newIndex =
        dir === "prev"
          ? (activeIndex - 1 + projects.length) % projects.length
          : (activeIndex + 1) % projects.length;
      setActiveIndex(newIndex);
      setSelectedProject(projects[newIndex]);
      setIsZoomed(false);
      setZoomLevel(1);
    },
    [activeIndex]
  );

  const toggleZoom = () => {
    if (isZoomed) {
      setIsZoomed(false);
      setZoomLevel(1);
    } else {
      setIsZoomed(true);
      setZoomLevel(2);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateProject("prev");
      if (e.key === "ArrowRight") navigateProject("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject, closeModal, navigateProject]);

  return (
    <section id="portfolio" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
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
              Kumpulan proyek terpilih yang menunjukkan komitmen kami terhadap
              kualitas, performa, dan desain estetis.
            </motion.p>
          </div>


        </div>

        {/* Projects Grid */}
        <div id="portfolio-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="w-full h-64 relative overflow-hidden bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 bg-slate-950/60 backdrop-blur-sm gap-4">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <div className="p-3 bg-white/15 rounded-full backdrop-blur-md border border-white/20">
                        <ZoomIn size={22} />
                      </div>
                      <span className="text-sm font-medium">Lihat Detail</span>
                    </div>
                  </div>

                  {/* Category chip */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-lg`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`open-project-${project.id}`}
                    className="mt-4 flex items-center gap-2 text-sm text-neon-cyan hover:text-white transition-colors font-medium group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                  >
                    <ExternalLink size={15} />
                    Buka Proyek
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom "Semua Proyek" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <button
            id="all-projects-btn"
            onClick={() => {
              setShowAll(!showAll);
              if (!showAll) {
                setTimeout(() => {
                  document
                    .getElementById("portfolio-grid")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }
            }}
            className={`relative group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 overflow-hidden border ${
              showAll
                ? "border-slate-600 text-slate-300 hover:border-neon-cyan hover:text-neon-cyan bg-slate-900/50"
                : "border-neon-cyan text-neon-cyan hover:text-slate-900 bg-transparent hover:bg-neon-cyan"
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              {showAll ? (
                <>
                  Tampilkan Lebih Sedikit
                  <ChevronLeft size={18} />
                </>
              ) : (
                <>
                  Semua Proyek ({projects.length})
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </span>
          </button>
        </motion.div>
      </div>

      {/* ---- MODAL ---- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-5xl bg-slate-900 border border-slate-700/60 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                id="modal-close-btn"
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              {/* Navigation buttons */}
              <button
                id="modal-prev-btn"
                onClick={() => navigateProject("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-sm hidden md:flex items-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                id="modal-next-btn"
                onClick={() => navigateProject("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-sm hidden md:flex items-center"
              >
                <ChevronRight size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Image with Zoom */}
                <div className="relative bg-slate-950 overflow-hidden" style={{ minHeight: "420px" }}>
                  <div
                    className={`relative w-full h-full transition-transform duration-300 ${
                      isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "center center",
                      height: "420px",
                    }}
                    onClick={toggleZoom}
                  >
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${selectedProject.accent} opacity-5`}
                    />
                  </div>

                  {/* Zoom controls */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                    <button
                      id="zoom-out-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomLevel((z) => Math.max(1, z - 0.5));
                        if (zoomLevel <= 1.5) setIsZoomed(false);
                      }}
                      className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-sm hover:bg-slate-800"
                      disabled={zoomLevel <= 1}
                    >
                      <ZoomOut size={16} />
                    </button>
                    <button
                      id="zoom-in-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomLevel((z) => Math.min(3, z + 0.5));
                        setIsZoomed(true);
                      }}
                      className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-sm hover:bg-slate-800"
                      disabled={zoomLevel >= 3}
                    >
                      <ZoomIn size={16} />
                    </button>
                    <span className="px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-xs font-mono text-slate-400 backdrop-blur-sm">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                  </div>

                  {/* Zoom hint */}
                  {!isZoomed && (
                    <div className="absolute bottom-4 left-4 text-xs text-slate-500 flex items-center gap-1">
                      <ZoomIn size={13} /> Klik untuk zoom
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${selectedProject.accent} text-white shadow-lg`}
                    >
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Right - Details */}
                <div className="p-8 flex flex-col gap-6">
                  {/* Title */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Klien", value: selectedProject.client },
                      { label: "Durasi", value: selectedProject.duration },
                      { label: "Tahun", value: selectedProject.year },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50"
                      >
                        <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                        <p className="text-sm font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-3">
                      Tentang Proyek
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-3">
                      Teknologi
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${selectedProject.accent} bg-opacity-10 text-white border border-white/10 font-medium`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project counter */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                    <span className="text-xs text-slate-500">
                      Proyek {activeIndex + 1} dari {projects.length}
                    </span>
                    {/* Mobile navigation */}
                    <div className="flex gap-2 md:hidden">
                      <button
                        onClick={() => navigateProject("prev")}
                        className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => navigateProject("next")}
                        className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    <div className="flex gap-1">
                      {projects.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setActiveIndex(i);
                            setSelectedProject(projects[i]);
                            setIsZoomed(false);
                            setZoomLevel(1);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === activeIndex
                              ? `bg-gradient-to-r ${selectedProject.accent} w-5`
                              : "bg-slate-600 hover:bg-slate-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
