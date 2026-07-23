import Container from "@/components/layout/Container";
import FeatureCard from "./FeatureCard";
import { features } from "./whyChooseData";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}