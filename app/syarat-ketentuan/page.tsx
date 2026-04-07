import Link from "next/link";
import Image from "next/image";
import { FileText, ArrowLeft, Users, Briefcase, AlertTriangle, Scale, Ban, RefreshCw, Mail } from "lucide-react";

export const metadata = {
  title: "Syarat & Ketentuan | NexCodea",
  description: "Syarat dan ketentuan penggunaan layanan NexCodea. Baca sebelum menggunakan layanan kami.",
};

const sections = [
  {
    icon: Users,
    title: "1. Penerimaan Syarat",
    content: [
      "Dengan mengakses atau menggunakan layanan NexCodea, Anda menyatakan bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh Syarat & Ketentuan ini.",
      "Jika Anda tidak menyetujui syarat-syarat ini, Anda tidak diizinkan untuk menggunakan layanan kami. Kami berhak mengubah syarat ini kapan saja.",
      "Syarat ini berlaku untuk semua pengunjung, pengguna, dan pihak lain yang mengakses atau menggunakan layanan kami.",
    ],
  },
  {
    icon: Briefcase,
    title: "2. Deskripsi Layanan",
    content: [
      "NexCodea menyediakan layanan pengembangan web profesional, termasuk namun tidak terbatas pada: perancangan website, pengembangan aplikasi web, optimasi SEO, dan konsultasi digital.",
      "Detail spesifik layanan, timeline pengerjaan, dan biaya akan disepakati secara terpisah dalam Perjanjian Kerja Sama (PKS) atau Surat Penawaran yang ditandatangani kedua pihak.",
      "Kami berhak untuk memodifikasi, menangguhkan, atau menghentikan layanan sewaktu-waktu dengan pemberitahuan yang wajar kepada klien.",
    ],
  },
  {
    icon: Scale,
    title: "3. Pembayaran dan Penagihan",
    content: [
      "Pembayaran dilakukan sesuai tahapan yang disepakati — umumnya 50% di awal sebagai tanda jadi, dan 50% pelunasan sebelum website/produk diserahterimakan.",
      "Semua harga tidak termasuk PPN kecuali dinyatakan lain secara eksplisit dalam penawaran. Invoice akan diterbitkan untuk setiap tahap pembayaran.",
      "Keterlambatan pembayaran lebih dari 14 hari kerja dapat mengakibatkan penundaan pengerjaan proyek tanpa kompensasi waktu.",
      "Pembayaran yang sudah diterima tidak dapat dikembalikan (non-refundable) kecuali NexCodea terbukti gagal memenuhi scope pekerjaan yang telah disepakati.",
    ],
  },
  {
    icon: FileText,
    title: "4. Hak Kekayaan Intelektual",
    content: [
      "Setelah pelunasan penuh, hak cipta atas desain dan kode custom yang dibuat khusus untuk proyek Anda akan dialihkan kepada Anda sebagai klien.",
      "Framework, library, plugin, dan komponen open-source yang digunakan tetap tunduk pada lisensi masing-masing pihak ketiga (MIT, GPL, dll).",
      "NexCodea berhak menyebutkan nama klien dan menampilkan proyek dalam portofolio kami, kecuali klien meminta kerahasiaan secara tertulis.",
      "Anda tidak diperbolehkan menjual kembali kode atau desain yang dibuat NexCodea kepada pihak ketiga tanpa persetujuan tertulis dari kami.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "5. Tanggung Jawab Klien",
    content: [
      "Klien bertanggung jawab menyediakan konten (teks, gambar, video, dll) yang diperlukan tepat waktu sesuai timeline yang disepakati.",
      "Keterlambatan penyediaan konten atau feedback oleh klien lebih dari 7 hari kerja dapat menggeser deadline proyek tanpa dianggap pelanggaran kontrak dari pihak NexCodea.",
      "Klien menjamin bahwa semua konten yang diserahkan tidak melanggar hak cipta, merek dagang, atau hak kekayaan intelektual pihak lain.",
      "Klien bertanggung jawab atas keamanan akses website (domain, hosting, akun admin) yang diserahkan kepada mereka setelah proyek selesai.",
    ],
  },
  {
    icon: Ban,
    title: "6. Batasan Tanggung Jawab",
    content: [
      "NexCodea tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan kami.",
      "Total tanggung jawab NexCodea atas klaim apapun tidak akan melebihi total nilai pembayaran yang telah diterima untuk proyek yang bersangkutan.",
      "Kami tidak menjamin bahwa layanan kami akan selalu tersedia tanpa gangguan, atau bebas dari error. Pemeliharaan berkala dapat menyebabkan downtime sementara.",
      "Kami tidak bertanggung jawab atas kerugian yang disebabkan oleh pihak ketiga termasuk penyedia hosting, domain registrar, atau layanan eksternal lainnya.",
    ],
  },
  {
    icon: RefreshCw,
    title: "7. Revisi dan Perubahan Proyek",
    content: [
      "Setiap paket layanan mencakup jumlah revisi yang disepakati dalam proposal. Revisi tambahan di luar scope akan dikenakan biaya tambahan.",
      "Perubahan scope proyek (penambahan fitur/halaman) setelah proyek berjalan harus disepakati secara tertulis dan mungkin memerlukan penyesuaian biaya dan timeline.",
      "Revisi minor (perubahan teks, warna, gambar) yang tidak mengubah struktur fundamental tidak dihitung sebagai revisi major.",
    ],
  },
];

export default function SyaratKetentuan() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <FileText size={14} />
            Dokumen Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Syarat &amp; Ketentuan</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Harap baca syarat dan ketentuan berikut dengan seksama sebelum menggunakan layanan kami.
          </p>
          <p className="text-slate-500 text-sm mt-6">
            Terakhir diperbarui: <span className="text-slate-400">1 Januari 2025</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl px-6 md:px-12 pb-24">

        {/* Intro highlight */}
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-6 mb-10 flex gap-4">
          <AlertTriangle className="text-purple-400 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-slate-300 leading-relaxed text-sm">
            Dokumen ini merupakan perjanjian yang mengikat secara hukum antara Anda dan <strong className="text-white">NexCodea</strong>.
            Dengan menggunakan layanan kami atau menandatangani proposal/kontrak, Anda dianggap telah membaca dan
            menyetujui seluruh syarat dan ketentuan yang berlaku di bawah ini.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-purple-500/20 transition-colors">
                  <section.icon size={18} className="text-purple-400" />
                </div>
                <h2 className="text-xl font-bold text-white pt-1.5">{section.title}</h2>
              </div>
              <div className="ml-14 space-y-3">
                {section.content.map((para, j) => (
                  <p key={j} className="text-slate-400 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 flex-shrink-0 mt-2.5" />
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

        {/* Hukum yang Berlaku */}
        <div className="mt-10 bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">8. Hukum yang Berlaku dan Penyelesaian Sengketa</h2>
          <p className="text-slate-400 leading-relaxed">
            Syarat & Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia.
            Setiap sengketa yang timbul akan diselesaikan terlebih dahulu melalui musyawarah mufakat.
            Jika tidak tercapai kesepakatan dalam 30 hari, sengketa akan diselesaikan melalui Badan Arbitrase
            Nasional Indonesia (BANI) atau Pengadilan Negeri yang berwenang di Indonesia.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-gradient-to-br from-purple-500/5 to-slate-900/30 border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Mail size={20} className="text-purple-400" />
            <h2 className="text-lg font-bold text-white">Ada Pertanyaan?</h2>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4">
            Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, jangan ragu untuk menghubungi kami
            sebelum menggunakan layanan kami.
          </p>
          <div className="space-y-1 text-sm text-slate-400">
            <p><span className="text-slate-300 font-medium">Email:</span> hello@webagency.com</p>
            <p><span className="text-slate-300 font-medium">WhatsApp:</span> +62 823-2868-1430</p>
            <p><span className="text-slate-300 font-medium">Alamat:</span> Pangkalan Bun, Kalimantan Tengah, Indonesia</p>
          </div>
        </div>

        {/* Footer of page */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} NexCodea. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/kebijakan-privasi" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</Link>
            <span className="text-purple-400">Syarat &amp; Ketentuan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
