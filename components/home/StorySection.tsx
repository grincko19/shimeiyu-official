import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import ScrollFade from "../animation/ScrollFade";

export default function StorySection() {
  return (
    <ScrollFade>
      <Section>
        <Heading title="品牌故事" subtitle="Since 1774" />

        <p className="leading-8 text-gray-700">
          施美玉名香祖舖創立於清乾隆年間，
          至今已有超過250年的製香經驗，
          堅持天然原料與傳統工藝。
        </p>

        <Button>閱讀更多</Button>
      </Section>
    </ScrollFade>
  );
}
