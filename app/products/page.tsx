import ProductList from "@/components/products/ProductList";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto py-32 px-8">
      <h1 className="text-5xl font-bold mb-4">
        商品總覽
      </h1>

      <p className="text-gray-500 mb-10">
        依照商品分類瀏覽施美玉名香祖舖商品。
      </p>

      <ProductList />
    </div>
  );
}
