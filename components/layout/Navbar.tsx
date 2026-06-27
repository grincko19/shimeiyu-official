"use client";

import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md h-16"
          : "bg-white/70 backdrop-blur h-20"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-full flex justify-between items-center px-6 transition-all duration-300">
        <Logo />

        <div className="hidden md:flex gap-10">
          <a href="/">首頁</a>
          <a href="/about">品牌故事</a>
          <a href="/products">商品</a>
          <a href="/contact">聯絡我們</a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
