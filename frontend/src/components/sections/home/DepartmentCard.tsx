import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function DepartmentCard({
  title,
  description,
  icon: Icon,
}: DepartmentCardProps) {
  return (
    <div className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl">
      <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600">
        <Icon className="size-7" />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3">
        Learn More
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}