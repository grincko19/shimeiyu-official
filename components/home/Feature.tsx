import Section from "../ui/Section";

import Heading from "../ui/Heading";

import FeatureCard from "./FeatureCard";

export default function Feature(){

return(

<Section>

<Heading

title="品牌精神"

subtitle="250年的製香工藝"

 />

<div className="grid grid-cols-4 gap-8">

<FeatureCard

title="天然原料"

text="嚴選天然香材"

 />

<FeatureCard

title="SGS"

text="安全檢驗"

 />

<FeatureCard

title="MIT"

text="台灣製造"

 />

<FeatureCard

title="百年工藝"

text="傳承至今"

 />

</div>

</Section>

)

}
