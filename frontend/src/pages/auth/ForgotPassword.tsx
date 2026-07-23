import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md">
        <Card className="border-slate-200 shadow-xl">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <div className="h-7 w-7 rounded-full bg-blue-600" />
            </div>

            <CardTitle className="text-3xl font-bold text-slate-900">
              Forgot Password
            </CardTitle>

            <CardDescription className="text-slate-600">
              Enter your registered email address and we'll send you a password
              reset link.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                />
              </div>

              <Button className="w-full" size="lg">
                Send Reset Link
              </Button>
            </form>

            <div className="my-6">
              <Separator />
            </div>

            <p className="text-center text-sm text-slate-600">
              Remember your password?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-slate-500">
          Secure Hospital Content Management System
        </p>
      </div>
    </div>
  );
}