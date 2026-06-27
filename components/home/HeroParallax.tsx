"use client";

import { useEffect, useState } from "react";

export default function HeroParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      <img
        src="/hero.jpg"
        className="w-full h-full object-cover"
        alt="hero"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
