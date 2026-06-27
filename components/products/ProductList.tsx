"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import CategoryMenu from "./CategoryMenu";
import ProductCard from "../home/ProductCard";

export default function ProductList() {
  const categories = useMemo(() => {
    return [
      "全部",
      ...new Set(products.map((product) => product.category)),
    ];
  }, []);

  const [currentCategory, setCurrentCategory] = useState("全部");

  const filteredProducts =
    currentCategory === "全部"
      ? products
      : products.filter(
          (product) => product.category === currentCategory
        );

  return (
    <>
      <CategoryMenu
        categories={categories}
        current={currentCategory}
        onChange={setCurrentCategory}
      />

      <p className="mb-6 text-gray-500">
        共 {filteredProducts.length} 項商品
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </>
  );
}
