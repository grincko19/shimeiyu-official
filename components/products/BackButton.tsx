"use client";

import { useRouter } from "next/navigation";

export default function BackButton(){

const router=useRouter();

return(

<button

onClick={()=>router.back()}

className="mb-10"

>

← 返回商品列表

</button>

)

}
