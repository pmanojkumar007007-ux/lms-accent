import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  GraduationCap,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/Header";
import { TermsModal } from "@/components/TermsModal";
import { PrivacyModal } from "@/components/PrivacyModal";
import AccentLogo from "@/components/AccentLogo";

export default function Index() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description:
        "Access thousands of courses across multiple disciplines with expert-led content.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description:
        "Learn together with peers through discussion forums and group projects.",
    },
    {
      icon: Award,
      title: "Certified Learning",
      description:
        "Earn recognized certificates and credentials upon course completion.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed analytics and progress reports.",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Active Students" },
    { value: "1,200+", label: "Expert Instructors" },
    { value: "5,000+", label: "Courses Available" },
    { value: "98%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      content:
        "The LMS platform transformed my career. The courses are well-structured and the instructors are top-notch.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      content:
        "I've completed 5 courses here and each one has been incredibly valuable for my professional growth.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      content:
        "The interactive learning approach and project-based curriculum made all the difference.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header showAuthButtons={true} variant="default" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              <Globe className="h-3 w-3 mr-1" />
              Trusted by 50,000+ Students Worldwide
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Future with
              <span className="text-primary block mt-2">
                Expert-Led Learning
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Master new skills, advance your career, and achieve your goals
              with our comprehensive learning management system designed for
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our LMS Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience learning like never before with our cutting-edge
              features and personalized approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful learners who transformed their
              careers with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of learners and take the first step towards
              achieving your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                >
                  Join Free Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary rounded-xl p-2">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <AccentLogo />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering learners worldwide with comprehensive, expert-led
                courses and cutting-edge learning technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/courses" className="hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="hover:text-white underline"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="hover:text-white underline"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <Link to="/support" className="hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:text-white">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 LMS - Learning Management System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TermsModal open={showTermsModal} onOpenChange={setShowTermsModal} />
      <PrivacyModal
        open={showPrivacyModal}
        onOpenChange={setShowPrivacyModal}
      />
    </div>
  );
}
