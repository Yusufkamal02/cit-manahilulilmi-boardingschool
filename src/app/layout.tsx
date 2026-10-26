import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { THEME_STORAGE_KEY } from "@/components/theme-key";
import { school } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CIT Manahilulilmi Boarding School — SMP & SMK IT, IoT & Robotics",
  description:
    "SMP-SMK CIT Manahilulilmi Boarding School: pendidikan teknologi, IoT & robotika, tahfidz, dan pembinaan karakter berasrama. PPDB 2027/2028 telah dibuka.",
  robots: school.isPreview ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07130d" },
  ],
};

// Dijalankan sebelum halaman tampil agar tidak ada kedipan tema yang salah.
const themeScript = `(function(){try{var p=localStorage.getItem("${THEME_STORAGE_KEY}")||"system";var d=p==="dark"||(p==="system"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;translate:none!important;scale:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
