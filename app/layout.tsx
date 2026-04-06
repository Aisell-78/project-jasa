import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexCodea | Membangun Pengalaman Digital",
  description: "Kami adalah agensi digital profesional. Layanan Web Development dan UI/UX Design terbaik untuk bisnis Anda.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${outfit.className} antialiased bg-slate-950 text-slate-50 min-h-screen selection:bg-neon-blue selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}
