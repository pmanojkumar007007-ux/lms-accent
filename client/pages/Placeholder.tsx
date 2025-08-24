import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ArrowLeft, Home } from "lucide-react";
import { useEffect, useState } from "react";
import AccentLogo from "@/components/AccentLogo";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      try {
        const user = JSON.parse(userDetails);
        setIsAdmin(!!user.isAdmin);
        setIsInstructor(!!user.isInstructor);
      } catch {}
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    window.location.reload();
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <AccentLogo />

            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="ghost">Courses</Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost">Contact</Button>
              </Link>
              {isAdmin && (
                <Link to="/admin/dashboard">
                  <Button variant="ghost">Admin Dashboard</Button>
                </Link>
              )}
              {isInstructor && (
                <Link to="/instructor/dashboard">
                  <Button variant="ghost">Instructor Dashboard</Button>
                </Link>
              )}
              {isLoggedIn ? (
                <Button variant="outline" onClick={handleLogout}>Logout</Button>
              ) : (
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

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="text-lg">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                This page is coming soon! We're working hard to bring you
                amazing features. Continue exploring other parts of our platform
                or check back later.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="w-full sm:w-auto">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
