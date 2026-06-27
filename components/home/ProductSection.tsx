import Section from "../ui/Section";

import Heading from "../ui/Heading";

import ProductCard from "./ProductCard";

export default function ProductSection(){

return(

<Section>

<Heading

title="精選商品"

subtitle="Best Seller"

/>

<div className="grid md:grid-cols-3 gap-8">

<ProductCard

title="天然沉香"

price={980}

/>

<ProductCard

title="天然檀香"

price={680}

/>

<ProductCard

title="環香"

price={520}

/>

</div>

</Section>

)

}
