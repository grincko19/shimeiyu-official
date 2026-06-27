import { products } from "@/data/products";
import ProductCard from "../home/ProductCard";

export default function ProductGrid() {

  return (

    <div className="grid md:grid-cols-3 gap-8">

      {products.map((product) => (

        <ProductCard

          key={product.id}

          title={product.name}

          price={product.price}

        />

      ))}

    </div>

  );

}
