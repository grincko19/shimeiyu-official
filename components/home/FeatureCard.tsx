import Card from "../ui/Card";

interface Props {
  title: string;
  text: string;
}

export default function FeatureCard({ title, text }: Props) {
  return (
    <div className="group rounded-3xl border p-10 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-xl font-semibold group-hover:text-[#1E352B] transition">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {text}
      </p>
    </div>
  );
}
