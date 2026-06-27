import Card from "../ui/Card";

interface Props{

title:string;

price:number;

}

export default function ProductCard({

title,

price

}:Props){

return(

<Card>

<div className="aspect-square rounded-2xl bg-gray-200"/>

<h3 className="mt-5 text-2xl">

{title}

</h3>

<p className="mt-3 text-lg font-bold">

NT$ {price}

</p>

<button

className="mt-6 px-5 py-3 rounded-full bg-[#1E352B] text-white"

>

查看商品

</button>

</Card>

)

}
