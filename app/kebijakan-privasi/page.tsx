import Link from "next/link";
import Image from "next/image";
import { Shield, ArrowLeft, Lock, Eye, Database, Share2, RefreshCw, Mail } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi | NexCodea",
  description: "Kebijakan privasi NexCodea menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.",
};

const sections = [
  {
    icon: Database,
    title: "1. Informasi yang Kami Kumpulkan",
    content: [
      "Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti nama, alamat email, dan nomor telepon saat Anda mengisi formulir kontak atau menghubungi kami.",
      "Kami juga mengumpulkan informasi teknis secara otomatis seperti alamat IP, jenis browser, halaman yang dikunjungi, dan durasi kunjungan melalui cookies dan teknologi serupa.",
      "Informasi dari komunikasi Anda dengan kami, termasuk email, pesan WhatsApp, dan percakapan lainnya yang berkaitan dengan proyek atau layanan.",
    ],
  },
  {
    icon: Eye,
    title: "2. Bagaimana Kami Menggunakan Informasi Anda",
    content: [
      "Untuk merespons pertanyaan, memberikan penawaran, dan menindaklanjuti permintaan layanan yang Anda ajukan.",
      "Untuk meningkatkan website, layanan, dan pengalaman pengguna secara keseluruhan berdasarkan analisis data agregat.",
      "Untuk mengirimkan informasi terkait layanan, pembaruan proyek, dan komunikasi lain yang relevan dengan hubungan bisnis kami.",
      "Untuk memenuhi kewajiban hukum dan melindungi hak-hak sah kami sesuai peraturan yang berlaku di Indonesia.",
    ],
  },
  {
    icon: Lock,
    title: "3. Keamanan Informasi",
    content: [
      "Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi informasi pribadi Anda dari akses tidak sah, pengungkapan, perubahan, atau penghancuran.",
      "Data Anda disimpan di server yang aman dengan enkripsi SSL/TLS. Kami secara rutin meninjau dan memperbarui praktik keamanan kami.",
      "Meskipun kami berupaya keras untuk melindungi data Anda, tidak ada metode transmisi atau penyimpanan elektronik yang 100% aman.",
    ],
  },
  {
    icon: Share2,
    title: "4. Berbagi Informasi dengan Pihak Ketiga",
    content: [
      "Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan eksplisit Anda.",
      "Kami dapat berbagi informasi dengan penyedia layanan tepercaya yang membantu operasional kami (seperti layanan hosting, analitik, dan email), terikat oleh perjanjian kerahasiaan.",
      "Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum, putusan pengadilan, atau otoritas pemerintah yang berwenang di Indonesia.",
    ],
  },
  {
    icon: RefreshCw,
    title: "5. Cookies dan Teknologi Pelacakan",
    content: [
      "Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda, menganalisis traffic website, dan mengingat preferensi Anda.",
      "Anda dapat mengatur browser Anda untuk menolak semua cookies atau untuk mendapat notifikasi saat cookie dikirim. Namun, beberapa fitur website mungkin tidak berfungsi dengan baik tanpa cookies.",
      "Kami menggunakan Google Analytics untuk memahami bagaimana pengunjung menggunakan website kami. Data ini bersifat anonim dan agregat.",
    ],
  },
  {
    icon: Shield,
    title: "6. Hak-Hak Anda",
    content: [
      "Anda berhak untuk mengakses, memperbarui, atau menghapus informasi pribadi yang kami miliki tentang Anda kapan saja.",
      "Anda berhak meminta salinan data pribadi Anda yang kami simpan dalam format yang dapat dibaca mesin.",
      "Anda berhak untuk menarik persetujuan Anda atas pemrosesan data kapan saja, tanpa memengaruhi keabsahan pemrosesan sebelum penarikan.",
      "Untuk menggunakan hak-hak ini, hubungi kami melalui email di hello@webagency.com.",
    ],
  },
];

export default function KebijakanPrivasi() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar mini */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl overflow-hidden">
              <Image src="/logo.jpg" alt="NexCodea" width={36} height={36} className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-white text-lg">NexCodea</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-neon-cyan transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden pt-20 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6">
            <Shield size={14} />
            Dokumen Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kebijakan Privasi</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Kami berkomitmen untuk melindungi privasi dan keamanan informasi pribadi Anda.
          </p>
          <p className="text-slate-500 text-sm mt-6">
            Terakhir diperbarui: <span className="text-slate-400">1 Januari 2025</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl px-6 md:px-12 pb-24">

        {/* Intro card */}
        <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 mb-10">
          <p className="text-slate-300 leading-relaxed">
            Kebijakan Privasi ini menjelaskan bagaimana <strong className="text-white">NexCodea</strong> (&quot;kami&quot;, &quot;kita&quot;)
            mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan saat menggunakan layanan dan website kami
            di <span className="text-neon-cyan">nexcodea.com</span>. Dengan menggunakan layanan kami, Anda menyetujui
            praktik yang dijelaskan dalam kebijakan ini.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-neon-blue/20 transition-colors">
                  <section.icon size={18} className="text-neon-blue" />
                </div>
                <h2 className="text-xl font-bold text-white pt-1.5">{section.title}</h2>
              </div>
              <div className="ml-14 space-y-3">
                {section.content.map((para, j) => (
                  <p key={j} className="text-slate-400 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/60 flex-shrink-0 mt-2.5" />
                    {para}
                  </p>
                ))}
              </div>
              {i < sections.length - 1 && (
                <div className="border-b border-slate-800/60 mt-8" />
              )}
            </div>
          ))}
        </div>

        {/* Perubahan Kebijakan */}
        <div className="mt-10 bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">7. Perubahan Kebijakan Privasi</h2>
          <p className="text-slate-400 leading-relaxed">
            Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan signifikan akan kami beritahukan
            melalui email atau notifikasi di website kami. Terus menggunakan layanan kami setelah perubahan berlaku
            berarti Anda menerima kebijakan yang diperbarui. Kami mendorong Anda untuk meninjau halaman ini secara berkala.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-gradient-to-br from-neon-blue/5 to-slate-900/30 border border-neon-blue/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Mail size={20} className="text-neon-cyan" />
            <h2 className="text-lg font-bold text-white">Hubungi Kami</h2>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4">
            Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini, atau ingin menggunakan
            hak-hak Anda, silakan hubungi kami:
          </p>
          <div className="space-y-1 text-sm text-slate-400">
            <p><span className="text-slate-300 font-medium">Email:</span> hello@webagency.com</p>
            <p><span className="text-slate-300 font-medium">Alamat:</span> Pangkalan Bun, Kalimantan Tengah, Indonesia</p>
          </div>
        </div>

        {/* Footer of page */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} NexCodea. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span className="text-neon-cyan">Kebijakan Privasi</span>
            <Link href="/syarat-ketentuan" className="hover:text-slate-300 transition-colors">Syarat &amp; Ketentuan</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
