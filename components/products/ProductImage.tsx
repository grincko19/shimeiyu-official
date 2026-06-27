interface Props{

image:string;

name:string;

}

export default function ProductImage({

image,

name

}:Props){

return(

<div>

<img

src={image}

alt={name}

className="w-full rounded-3xl bg-gray-100"

/>

</div>

)

}
