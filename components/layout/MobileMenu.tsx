"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="absolute top-20 right-0 bg-white shadow-lg p-6 flex flex-col gap-4">
          <a href="/">首頁</a>
          <a href="/about">品牌故事</a>
          <a href="/products">商品</a>
          <a href="/contact">聯絡我們</a>
        </div>
      )}
    </div>
  );
}
