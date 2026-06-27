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

<div className="h-52 rounded-2xl bg-gray-200"/>

<h3 className="mt-5">

{title}

</h3>

<p className="mt-3">

NT$

{price}

</p>

</Card>

)

}
