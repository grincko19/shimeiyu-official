import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetail from "@/components/products/ProductDetail";
import BackButton from "@/components/products/BackButton";

interface Props{

params:{

id:string;

};

}

export default function ProductPage({

params

}:Props){

const product=products.find(

(item)=>item.slug===params.id

);

if(!product){

notFound();

}

return(

<div className="max-w-7xl mx-auto py-32 px-8">

<BackButton/>

<ProductDetail

product={product}

/>

</div>

);

}
