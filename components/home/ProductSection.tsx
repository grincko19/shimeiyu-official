import Section from "../ui/Section";
import Heading from "../ui/Heading";
import ScrollFade from "../animation/ScrollFade";

export default function ProductSection() {
  return (
    <ScrollFade>
      <Section>
        <Heading title="精選商品" subtitle="Best Seller" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="aspect-square bg-gray-200 rounded-2xl" />
          <div className="aspect-square bg-gray-200 rounded-2xl" />
          <div className="aspect-square bg-gray-200 rounded-2xl" />
        </div>
      </Section>
    </ScrollFade>
  );
}
