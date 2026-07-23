import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Container from "./Container";
import { navigation } from "@/constants/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            MediCare
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/login">
              <Button variant="outline">
                Login
              </Button>
            </Link>

            <Link to="/appointment">
              <Button>
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72">
                <div className="mt-8 flex flex-col gap-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.href}
                      className={({ isActive }) =>
                        `text-base font-medium ${
                          isActive
                            ? "text-blue-600"
                            : "text-slate-700 hover:text-blue-600"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}

                  <div className="mt-6 space-y-3">
                    <Link to="/login" className="block">
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link
                      to="/appointment"
                      className="block"
                    >
                      <Button className="w-full">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}