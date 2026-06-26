import { ReactNode } from "react";

export default function Button({

children,

}:{

children:ReactNode

}){

return(

<button className="mt-10 px-8 py-4 rounded-full bg-[#1E352B] text-white hover:scale-105 transition">

{children}

</button>

)

}
