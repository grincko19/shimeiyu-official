import { Product } from "@/types/product";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

interface Props{

product:Product;

}

export default function ProductDetail({

product

}:Props){

return(

<div className="grid md:grid-cols-2 gap-16">

<ProductImage

image={product.image}

name={product.name}

/>

<ProductInfo

name={product.name}

price={product.price}

category={product.category}

description={product.description}

/>

</div>

)

}
