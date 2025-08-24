import { useState } from "react";
import api from "@/lib/axios";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {  Eye, EyeOff, Mail } from "lucide-react";
import AccentLogo from "@/components/AccentLogo";
import { Header } from "@/components/Header";
import { TermsModal } from "@/components/TermsModal";
import { PrivacyModal } from "@/components/PrivacyModal";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Please accept the terms and conditions to continue");
      return;
    }
    try {
      // Replace with your actual login API endpoint and response shape
      const res = await api.post("api/auth/login", { username:email, password });
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        // Save all details except token in userDetails
        const { token, ...userDetails } = res.data;
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        window.location.href = "/";
      } else {
        alert(res.data.error || "Login failed");
      }
    } catch (err: any) {
      alert(err?.response?.data?.error || "Login failed. Please try again later.");
    }
  };

  const handleGoogleLogin = () => {
    if (!acceptTerms) {
      alert("Please accept the terms and conditions to continue");
      return;
    }

    // Show loading state
    setIsLoading(true);

    // Simulate Google OAuth flow
    setTimeout(() => {
      setIsLoading(false);
      alert(
        "Google Login Demo: In a production environment, this would redirect to Google OAuth.\n\nFor now, this is a demonstration. Please use the regular login form below or contact support for access.",
      );
    }, 1000);

    // In a real app, this would be:
    // window.location.href = '/auth/google' or use Google OAuth SDK
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <AccentLogo />
        </div>

        {/* Login Card */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Google Login Button */}
            <Button
              variant="outline"
              className="w-full h-11 mb-6"
              onClick={handleGoogleLogin}
              type="button"
              disabled={isLoading}
            >
              <Mail className="h-5 w-5 mr-2 text-red-500" />
              {isLoading ? "Connecting to Google..." : "Continue with Google"}
            </Button>

            <div className="relative mb-6">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">or</span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 rounded border-gray-300"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-primary hover:text-primary/80 font-medium underline"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-primary hover:text-primary/80 font-medium underline"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 text-base font-medium"
                disabled={!acceptTerms}
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <button
              type="button"
              onClick={() => setShowTermsModal(true)}
              className="text-primary hover:text-primary/80 underline"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="text-primary hover:text-primary/80 underline"
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>

      {/* Modals */}
      <TermsModal open={showTermsModal} onOpenChange={setShowTermsModal} />
      <PrivacyModal
        open={showPrivacyModal}
        onOpenChange={setShowPrivacyModal}
      />
    </div>
  );
}
