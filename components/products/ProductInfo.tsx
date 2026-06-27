interface Props{

name:string;

price:number;

category:string;

description:string;

}

export default function ProductInfo({

name,

price,

category,

description

}:Props){

return(

<div>

<p className="text-sm text-gray-500">

{category}

</p>

<h1 className="text-5xl mt-4">

{name}

</h1>

<p className="text-3xl mt-6 font-bold">

NT$ {price}

</p>

<p className="mt-8 leading-8">

{description}

</p>

<button

className="mt-10 px-8 py-4 rounded-full bg-[#1E352B] text-white"

>

立即洽詢

</button>

</div>

)

}
