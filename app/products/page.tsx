"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";

import ProductGrid from "@/components/products/ProductGrid";
import ProductFilter from "@/components/products/ProductFilter";
import ProductSearch from "@/components/products/ProductSearch";

export default function ProductsPage() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("全部");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        category === "全部" || product.category === category;

      const matchKeyword = product.name
        .toLowerCase()
        .includes(keyword.toLowerCase());

      return matchCategory && matchKeyword;
    });
  }, [keyword, category]);

  return (
    <div className="max-w-7xl mx-auto py-32 px-8">
      <h1 className="text-5xl mb-8">商品總覽</h1>

      <ProductSearch value={keyword} onChange={setKeyword} />

      <ProductFilter selected={category} onSelect={setCategory} />

      <p className="mb-8 text-gray-500">
        共 {filteredProducts.length} 項商品
      </p>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
