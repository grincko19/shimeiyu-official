import Link from "next/link";
import Card from "../ui/Card";

interface Props{

title:string;

price:number;

slug:string;

}

export default function ProductCard({

title,

price,

slug

}:Props){

return(

<Card>

<div className="aspect-square rounded-2xl bg-gray-200"/>

<h3 className="mt-5 text-2xl">

{title}

</h3>

<p className="mt-3 font-bold">

NT$ {price}

</p>

<Link
href={`/products/${slug}`}
>

<button
className="mt-6 px-5 py-3 rounded-full bg-[#1E352B] text-white"
>

查看商品

</button>

</Link>

</Card>

)

}
