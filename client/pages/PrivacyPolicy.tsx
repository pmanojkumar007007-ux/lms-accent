import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  ArrowLeft,
  Home,
  Shield,
  Eye,
  Lock,
  Database,
} from "lucide-react";

export default function PrivacyPolicy() {
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
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Effective Date: January 1, 2024
            </p>
            <p className="text-gray-600">Last Updated: January 1, 2024</p>
          </div>

          {/* Privacy Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Data Protection
                </h3>
                <p className="text-sm text-gray-600">
                  Your data is encrypted and securely stored
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Transparency
                </h3>
                <p className="text-sm text-gray-600">
                  Clear information about data collection
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Your Rights
                </h3>
                <p className="text-sm text-gray-600">
                  Control over your personal information
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Content */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Information We Collect
                  </h2>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Personal Information
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you register for an account, we collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Name and email address</li>
                    <li>Profile information you choose to provide</li>
                    <li>Educational background and interests</li>
                    <li>Payment information for paid services</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Device information and IP address</li>
                    <li>Browser type and operating system</li>
                    <li>Usage patterns and interaction data</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Learning progress and course completion data</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Provide and improve our educational services</li>
                    <li>Personalize your learning experience</li>
                    <li>Track your progress and provide feedback</li>
                    <li>Communicate important updates and notifications</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Provide customer support</li>
                    <li>Prevent fraud and ensure platform security</li>
                    <li>Analyze usage patterns to improve our platform</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Information Sharing
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may share your information in the following
                    circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>
                      <strong>With your consent:</strong> When you explicitly
                      agree to share information
                    </li>
                    <li>
                      <strong>Service providers:</strong> With trusted partners
                      who help us operate our platform
                    </li>
                    <li>
                      <strong>Educational institutions:</strong> When you're
                      enrolled through a partner institution
                    </li>
                    <li>
                      <strong>Legal compliance:</strong> When required by law or
                      to protect our rights
                    </li>
                    <li>
                      <strong>Business transfers:</strong> In case of merger,
                      acquisition, or sale
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <strong>
                      We never sell your personal information to third parties
                      for marketing purposes.
                    </strong>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Google Login and Third-Party Services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    When you use "Continue with Google" or other third-party
                    login services:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>
                      We receive basic profile information (name, email, profile
                      picture)
                    </li>
                    <li>
                      We do not access your Google account data beyond what's
                      necessary for authentication
                    </li>
                    <li>
                      Your use of Google services is governed by Google's
                      Privacy Policy
                    </li>
                    <li>
                      You can revoke access at any time through your Google
                      account settings
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Data Security
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Encrypted storage of sensitive information</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Access controls and employee training</li>
                    <li>Secure backup and disaster recovery procedures</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Your Rights and Choices
                  </h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>
                      <strong>Access:</strong> Request a copy of your personal
                      data
                    </li>
                    <li>
                      <strong>Rectification:</strong> Correct inaccurate or
                      incomplete information
                    </li>
                    <li>
                      <strong>Erasure:</strong> Request deletion of your
                      personal data
                    </li>
                    <li>
                      <strong>Portability:</strong> Export your data in a
                      readable format
                    </li>
                    <li>
                      <strong>Restriction:</strong> Limit how we process your
                      information
                    </li>
                    <li>
                      <strong>Objection:</strong> Opt out of certain data
                      processing activities
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Cookies and Tracking
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Remember your login preferences</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Provide personalized content recommendations</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    You can control cookies through your browser settings, but
                    some features may not work properly if cookies are disabled.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Data Retention
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We retain your information for as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Provide our services and support</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Improve our platform and services</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    When you delete your account, we will remove your personal
                    information within 30 days, except where retention is
                    required by law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. International Data Transfers
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Your information may be transferred to and processed in
                    countries other than your own. We ensure appropriate
                    safeguards are in place to protect your data in accordance
                    with this privacy policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Children's Privacy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Our service is not intended for children under 13. We do not
                    knowingly collect personal information from children under
                    13. If we become aware of such collection, we will delete
                    the information immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    11. Changes to This Policy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may update this privacy policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page and updating the "Last Updated" date. Your continued
                    use of our service after such changes constitutes acceptance
                    of the updated policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    12. Contact Us
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacy@lms.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Data Protection Officer:</strong> dpo@lms.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> LMS Privacy Department
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
            <Link to="/terms">
              <Button variant="outline" className="w-full sm:w-auto">
                View Terms of Service
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
