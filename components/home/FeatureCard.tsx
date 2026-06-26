import Card from "../ui/Card";

interface Props{

title:string;

text:string;

}

export default function FeatureCard({

title,

text

}:Props){

return(

<Card>

<h3>

{title}

</h3>

<p className="mt-5">

{text}

</p>

</Card>

)

}
