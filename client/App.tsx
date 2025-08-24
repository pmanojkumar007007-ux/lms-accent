import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route
            path="/courses"
            element={
              <Placeholder
                title="Courses"
                description="Browse our comprehensive course catalog"
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About Us"
                description="Learn more about our mission and values"
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Contact"
                description="Get in touch with our support team"
              />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Placeholder
                title="Forgot Password"
                description="Reset your account password"
              />
            }
          />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route
            path="/help"
            element={
              <Placeholder
                title="Help Center"
                description="Find answers to common questions"
              />
            }
          />
          <Route
            path="/support"
            element={
              <Placeholder
                title="Support"
                description="Get technical assistance"
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;

// Prevent multiple root creation during hot reload
if (!(container as any)._reactRoot) {
  (container as any)._reactRoot = createRoot(container);
}

(container as any)._reactRoot.render(<App />);
