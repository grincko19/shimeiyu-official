const categories = [

"全部",

"沉香",

"檀香",

"盤香",

"環香",

"塔香",

"香粉",

"香油",

"佛珠"

];

export default function CategoryMenu(){

return(

<div className="flex flex-wrap gap-4 mb-10">

{categories.map((item)=>(

<button

key={item}

className="px-5 py-2 rounded-full border hover:bg-black hover:text-white duration-300"

>

{item}

</button>

))}

</div>

)

}
