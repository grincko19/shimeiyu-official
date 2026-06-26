import { ReactNode } from "react";

export default function Section({

children

}:{

children:ReactNode

}){

return(

<section className="py-32">

<div className="max-w-7xl mx-auto px-8">

{children}

</div>

</section>

)

}
