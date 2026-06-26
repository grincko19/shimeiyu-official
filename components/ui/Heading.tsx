interface Props{

title:string;

subtitle?:string;

}

export default function Heading({

title,

subtitle

}:Props){

return(

<div className="mb-16">

<h2>

{title}

</h2>

{subtitle&&(

<p className="mt-4 text-gray-600">

{subtitle}

</p>

)}

</div>

)

}
