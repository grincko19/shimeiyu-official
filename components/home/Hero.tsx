import HeroParallax from "./HeroParallax";
import HeroContent from "./HeroContent";
import ScrollFade from "../animation/ScrollFade";

export default function Hero() {
  return (
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      <HeroParallax />

      <ScrollFade>
        <HeroContent />
      </ScrollFade>
    </div>
  );
}
