import { heroStats } from "./heroData";

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4">
      {heroStats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border bg-white p-5 text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-blue-600">
            {item.number}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}