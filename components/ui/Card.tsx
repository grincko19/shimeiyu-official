import { ReactNode } from "react";

export default function Card({

children

}:{

children:ReactNode

}){

return(

<div className="rounded-3xl border p-10 bg-white hover:shadow-xl duration-300">

{children}

</div>

)

}
