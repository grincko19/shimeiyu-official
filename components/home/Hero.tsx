import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollFade from "../animation/ScrollFade";

export default function Hero() {
  return (
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <ScrollFade>
        <HeroContent />
      </ScrollFade>
    </div>
  );
}
