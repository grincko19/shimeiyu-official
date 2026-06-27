"use client";

import { Product } from "@/types/product";
import ProductCard from "../home/ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          slug={product.slug}
          image={product.image}
        />
      ))}
    </div>
  );
}
