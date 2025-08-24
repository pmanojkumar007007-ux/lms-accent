import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { TermsModal } from "@/components/TermsModal";
import { PrivacyModal } from "@/components/PrivacyModal";
import AccentLogo from "./AccentLogo";

interface HeaderProps {
  showHomeButton?: boolean;
  showAuthButtons?: boolean;
  variant?: "default" | "minimal";
}

export function Header({
  showHomeButton = false,
  showAuthButtons = true,
  variant = "default",
}: HeaderProps) {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <AccentLogo />
            {variant === "default" && (
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Courses
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Contact
                </Link>
              </nav>
            )}

            <div className="flex items-center space-x-4">
              {showHomeButton && (
                <Link to="/">
                  <Button variant="ghost">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </Button>
                </Link>
              )}

              {showAuthButtons && (
                <>
                  <Link to="/login">
                    <Button variant="ghost">Sign In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <TermsModal open={showTermsModal} onOpenChange={setShowTermsModal} />
      <PrivacyModal
        open={showPrivacyModal}
        onOpenChange={setShowPrivacyModal}
      />
    </>
  );
}
