export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <img
        src="/hero.jpg"
        alt="hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
