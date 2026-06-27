import FadeIn from "../animation/FadeIn";
import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <FadeIn>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-serif">
          施美玉名香祖舖
        </h1>

        <p className="mt-6 text-xl">
          Since 1774
        </p>

        <Button>
          探索商品
        </Button>
      </div>
    </FadeIn>
  );
}
