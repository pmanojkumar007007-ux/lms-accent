import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyModal({ open, onOpenChange }: PrivacyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <DialogTitle className="text-xl">Privacy Policy</DialogTitle>
          </div>
          <DialogDescription>
            Effective Date: January 1, 2024 • Last Updated: January 1, 2024
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                1. Information We Collect
              </h3>

              <h4 className="text-sm font-semibold text-gray-800 mb-2">
                Personal Information
              </h4>
              <p className="text-gray-700 mb-2">
                When you register for an account, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>Name and email address</li>
                <li>Profile information you choose to provide</li>
                <li>Educational background and interests</li>
                <li>Payment information for paid services</li>
              </ul>

              <h4 className="text-sm font-semibold text-gray-800 mb-2">
                Automatically Collected Information
              </h4>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
                <li>Usage patterns and interaction data</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Learning progress and course completion data</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                2. How We Use Your Information
              </h3>
              <p className="text-gray-700 mb-2">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
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

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                3. Information Sharing
              </h3>
              <p className="text-gray-700 mb-2">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>
                  <strong>With your consent:</strong> When you explicitly agree
                  to share information
                </li>
                <li>
                  <strong>Service providers:</strong> With trusted partners who
                  help us operate our platform
                </li>
                <li>
                  <strong>Educational institutions:</strong> When you're
                  enrolled through a partner institution
                </li>
                <li>
                  <strong>Legal compliance:</strong> When required by law or to
                  protect our rights
                </li>
                <li>
                  <strong>Business transfers:</strong> In case of merger,
                  acquisition, or sale
                </li>
              </ul>
              <p className="text-gray-700 mb-3">
                <strong>
                  We never sell your personal information to third parties for
                  marketing purposes.
                </strong>
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                4. Google Login and Third-Party Services
              </h3>
              <p className="text-gray-700 mb-2">
                When you use "Continue with Google" or other third-party login
                services:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>
                  We receive basic profile information (name, email, profile
                  picture)
                </li>
                <li>
                  We do not access your Google account data beyond what's
                  necessary for authentication
                </li>
                <li>
                  Your use of Google services is governed by Google's Privacy
                  Policy
                </li>
                <li>
                  You can revoke access at any time through your Google account
                  settings
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                5. Data Security
              </h3>
              <p className="text-gray-700 mb-2">
                We implement industry-standard security measures:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and employee training</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                6. Your Rights and Choices
              </h3>
              <p className="text-gray-700 mb-2">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Rectification:</strong> Correct inaccurate or
                  incomplete information
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Portability:</strong> Export your data in a readable
                  format
                </li>
                <li>
                  <strong>Restriction:</strong> Limit how we process your
                  information
                </li>
                <li>
                  <strong>Objection:</strong> Opt out of certain data processing
                  activities
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                7. Cookies and Tracking
              </h3>
              <p className="text-gray-700 mb-2">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>Remember your login preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Provide personalized content recommendations</li>
                <li>Improve our services and user experience</li>
              </ul>
              <p className="text-gray-700 mb-3">
                You can control cookies through your browser settings, but some
                features may not work properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                8. Data Retention
              </h3>
              <p className="text-gray-700 mb-2">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>Provide our services and support</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our platform and services</li>
              </ul>
              <p className="text-gray-700 mb-3">
                When you delete your account, we will remove your personal
                information within 30 days, except where retention is required
                by law.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                9. International Data Transfers
              </h3>
              <p className="text-gray-700 mb-3">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your data in accordance with this
                privacy policy.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                10. Children's Privacy
              </h3>
              <p className="text-gray-700 mb-3">
                Our service is not intended for children under 13. We do not
                knowingly collect personal information from children under 13.
                If we become aware of such collection, we will delete the
                information immediately.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                11. Contact Us
              </h3>
              <p className="text-gray-700 mb-2">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-700 text-xs">
                  <strong>Email:</strong> privacy@lms.com
                </p>
                <p className="text-gray-700 text-xs">
                  <strong>Data Protection Officer:</strong> dpo@lms.com
                </p>
                <p className="text-gray-700 text-xs">
                  <strong>Address:</strong> LMS Privacy Department
                </p>
                <p className="text-gray-700 text-xs">
                  123 Education Street, Learning City, LC 12345
                </p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
