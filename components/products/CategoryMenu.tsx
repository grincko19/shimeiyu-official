"use client";

interface Props {
  categories: string[];
  current: string;
  onChange: (category: string) => void;
}

export default function CategoryMenu({
  categories,
  current,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-5 py-2 rounded-full border transition ${
            current === category
              ? "bg-[#1E352B] text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
