import Container from "@/components/layout/Container";
import DepartmentCard from "./DepartmentCard";
import { departments } from "./departmentData";

export default function Departments() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Departments
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Our Medical Specialties
          </h2>

          <p className="mt-5 text-slate-600">
            Our experienced specialists provide comprehensive medical care
            across multiple disciplines using modern technology and
            evidence-based treatment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <DepartmentCard
              key={department.title}
              {...department}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}