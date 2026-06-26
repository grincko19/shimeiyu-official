import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "施美玉名香祖舖 | SHI MEI YU",
  description: "Since 1774",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
