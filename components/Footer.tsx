"use client";

import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/logo.jpg" alt="NexCodea Logo" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                NexCodea
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Agensi web premium yang meredefinisi pengalaman digital melalui desain eksklusif dan engineering tingkat tinggi.
            </p>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { name: "Beranda", href: "#" },
                { name: "Tentang", href: "#about" },
                { name: "Layanan", href: "#services" },
                { name: "Portofolio", href: "#portfolio" },
                { name: "Tim", href: "#team" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-neon-cyan transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                <span>nexcodea@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 group">
                <svg className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5 fill-current group-hover:text-neon-blue transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/6282328681430" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">
                  Klik Disini
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                <span>Pangkalan Bun, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NexCodea. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/kebijakan-privasi" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-slate-300 transition-colors">Syarat &amp; Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
