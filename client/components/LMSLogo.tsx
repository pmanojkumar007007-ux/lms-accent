import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

interface LMSLogoProps {
  variant?: "default" | "admin";
  className?: string;
}

export function LMSLogo({ variant = "default", className = "" }: LMSLogoProps) {
  const isAdmin = variant === "admin";

  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <div
        className={`${isAdmin ? "bg-orange-500" : "bg-primary"} rounded-xl p-2`}
      >
        <BookOpen className="h-6 w-6 text-white" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          {isAdmin ? "LMS Admin Portal" : "LMS"}
        </h1>
        <p className="text-xs text-gray-600">
          {isAdmin ? "Administration Dashboard" : "Learning Management System"}
        </p>
      </div>
    </Link>
  );
}
