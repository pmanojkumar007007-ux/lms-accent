import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ArrowLeft, Home, FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary rounded-xl p-2">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LMS</h1>
                <p className="text-xs text-gray-600">
                  Learning Management System
                </p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Effective Date: January 1, 2024
            </p>
            <p className="text-gray-600">Last Updated: January 1, 2024</p>
          </div>

          {/* Terms Content */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using the LMS (Learning Management System)
                    platform, you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by
                    the above, please do not use this service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Description of Service
                  </h2>
                  <p className="text-gray-700 mb-4">
                    LMS is a learning management system that provides
                    educational content, courses, and tools for online learning.
                    The service includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Access to educational courses and materials</li>
                    <li>Interactive learning tools and assessments</li>
                    <li>Progress tracking and analytics</li>
                    <li>Community features and discussion forums</li>
                    <li>Certification and credentialing services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. User Accounts
                  </h2>
                  <p className="text-gray-700 mb-4">
                    To access certain features of the service, you must create
                    an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>
                      Accept responsibility for all activities under your
                      account
                    </li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Acceptable Use
                  </h2>
                  <p className="text-gray-700 mb-4">
                    You agree not to use the service to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>
                      Violate any local, state, national, or international law
                    </li>
                    <li>
                      Transmit any harassing, libelous, abusive, or threatening
                      content
                    </li>
                    <li>
                      Attempt to gain unauthorized access to the service or
                      other accounts
                    </li>
                    <li>
                      Distribute spam, malware, or other malicious software
                    </li>
                    <li>Impersonate any person or entity</li>
                    <li>Interfere with or disrupt the service or servers</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Intellectual Property
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The service and its original content, features, and
                    functionality are owned by LMS and are protected by
                    international copyright, trademark, patent, trade secret,
                    and other intellectual property laws.
                  </p>
                  <p className="text-gray-700 mb-4">
                    You may not reproduce, distribute, modify, create derivative
                    works of, publicly display, publicly perform, republish,
                    download, store, or transmit any of the material on our
                    service without prior written consent.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Privacy Policy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Your privacy is important to us. Please review our Privacy
                    Policy, which also governs your use of the service, to
                    understand our practices.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Payment Terms
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Some features of the service may require payment. You agree
                    to pay all fees associated with your use of paid features.
                    All fees are non-refundable unless otherwise stated.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Termination
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may terminate or suspend your account and access to the
                    service immediately, without prior notice or liability, for
                    any reason, including breach of these terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Disclaimers
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The service is provided on an "AS IS" and "AS AVAILABLE"
                    basis. We make no warranties, expressed or implied, and
                    hereby disclaim all other warranties including implied
                    warranties of merchantability, fitness for a particular
                    purpose, or non-infringement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 mb-4">
                    In no event shall LMS, its directors, employees, partners,
                    agents, suppliers, or affiliates be liable for any indirect,
                    incidental, special, consequential, or punitive damages
                    arising out of your access to or use of the service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    11. Changes to Terms
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these terms at any time. We
                    will notify users of any changes by posting the new terms on
                    this page. Your continued use of the service after such
                    changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    12. Contact Information
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service,
                    please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Email:</strong> legal@lms.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> LMS Legal Department
                    </p>
                    <p className="text-gray-700">
                      123 Education Street, Learning City, LC 12345
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/privacy">
              <Button variant="outline" className="w-full sm:w-auto">
                View Privacy Policy
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="w-full sm:w-auto">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
