import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";

import Container from "@/components/layout/Container";
import HeroStats from "./HeroStats";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Stethoscope className="size-4" />
              Trusted Healthcare Services
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
              Caring For Your Health With Modern Medical Excellence
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              We provide world-class healthcare with experienced doctors,
              advanced technology, and compassionate care for every patient.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/appointment">
                <Button>
                  Book Appointment
                </Button>
              </Link>

              <Link to="/doctors">
                <Button variant="outline">
                  Find Doctors
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>

            <HeroStats />
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="flex h-[500px] w-full max-w-md items-center justify-center rounded-3xl border bg-blue-100 shadow-lg">
              <span className="text-lg font-semibold text-blue-700">
                Hospital Illustration / Doctor Image
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}