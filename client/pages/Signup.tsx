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
import { BookOpen, Eye, EyeOff, Mail, User, Check } from "lucide-react";
import AccentLogo from "@/components/AccentLogo";
import { Header } from "@/components/Header";
import { TermsModal } from "@/components/TermsModal";
import { PrivacyModal } from "@/components/PrivacyModal";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    try {
      debugger;
      // Replace with your actual signup API endpoint and response shape
      const res = await api.post("api/auth/register", {
        username: formData.firstName+ formData.lastName,
        email: formData.email,
        password: formData.password,
        role: "Student",
      });
      debugger;
      if (res.data && (res.status=200)) {
        // If your API returns a token on signup, store it
        // if (res.data.token) {
        //   localStorage.setItem("token", res.data.token);
        // }
        alert("Signup successful! You can now log in.");
        window.location.href = "/login";
      } else {
        alert(res.data.error || "Signup failed");
      }
    } catch (err: any) {
      alert(err?.response?.data?.error || "Signup failed. Please try again later.");
    }
  };

  const handleGoogleSignup = () => {
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
        "Google Signup Demo: In a production environment, this would redirect to Google OAuth for account creation.\n\nFor now, this is a demonstration. Please use the regular signup form below or contact support for assistance.",
      );
    }, 1000);

    // In a real app, this would be:
    // window.location.href = '/auth/google/signup' or use Google OAuth SDK
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <AccentLogo />
        </div>

        {/* Signup Card */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center">
              Create your account
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Join thousands of learners and start your journey today
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Terms Notice for Google Signup */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-700 text-center">
                By continuing with Google, you agree to our Terms of Service and
                Privacy Policy
              </p>
            </div>

            {/* Google Signup Button */}
            <Button
              variant="outline"
              className="w-full h-11 mb-6"
              onClick={handleGoogleSignup}
              disabled={isLoading}
            >
              <Mail className="h-5 w-5 mr-2 text-red-500" />
              {isLoading ? "Connecting to Google..." : "Continue with Gmail"}
            </Button>

            <div className="relative mb-6">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">or</span>
              </div>
            </div>

            {/* Regular Signup Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
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

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="h-11 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="text-xs text-gray-600 space-y-1">
                <p>Password requirements:</p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${formData.password.length >= 8 ? "bg-green-500" : "bg-gray-300"}`}
                    >
                      {formData.password.length >= 8 && (
                        <Check className="h-2 w-2 text-white m-0.5" />
                      )}
                    </div>
                    At least 8 characters
                  </li>
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${/[A-Z]/.test(formData.password) ? "bg-green-500" : "bg-gray-300"}`}
                    >
                      {/[A-Z]/.test(formData.password) && (
                        <Check className="h-2 w-2 text-white m-0.5" />
                      )}
                    </div>
                    One uppercase letter
                  </li>
                  <li className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${/[0-9]/.test(formData.password) ? "bg-green-500" : "bg-gray-300"}`}
                    >
                      {/[0-9]/.test(formData.password) && (
                        <Check className="h-2 w-2 text-white m-0.5" />
                      )}
                    </div>
                    One number
                  </li>
                </ul>
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
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Security Info */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="h-2 w-2 text-white" />
            </div>
            <span>SSL Encrypted</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="h-2 w-2 text-white" />
            </div>
            <span>GDPR Compliant</span>
          </div>
          <p className="text-xs text-gray-500">
            Your data is secure and protected with industry-standard encryption
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
