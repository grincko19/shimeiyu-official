import Section from "../ui/Section";
import Heading from "../ui/Heading";
import ScrollFade from "../animation/ScrollFade";

export default function ProductSection() {
  return (
    <ScrollFade>
      <Section>
        <Heading title="精選商品" subtitle="Best Seller" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group aspect-square rounded-2xl bg-gray-200 relative overflow-hidden transition duration-500 hover:scale-[1.03] hover:shadow-xl" />

          <div className="group aspect-square rounded-2xl bg-gray-200 relative overflow-hidden transition duration-500 hover:scale-[1.03] hover:shadow-xl" />

          <div className="group aspect-square rounded-2xl bg-gray-200 relative overflow-hidden transition duration-500 hover:scale-[1.03] hover:shadow-xl" />
        </div>
      </Section>
    </ScrollFade>
  );
}
