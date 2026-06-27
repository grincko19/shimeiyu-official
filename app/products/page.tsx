import CategoryMenu from "@/components/products/CategoryMenu";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPage(){

return(

<div className="max-w-7xl mx-auto py-32 px-8">

<h1 className="text-5xl mb-10">

商品總覽

</h1>

<CategoryMenu/>

<ProductGrid/>

</div>

)

}
