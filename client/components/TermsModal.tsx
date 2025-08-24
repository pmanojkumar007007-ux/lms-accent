import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsModal({ open, onOpenChange }: TermsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <DialogTitle className="text-xl">Terms of Service</DialogTitle>
          </div>
          <DialogDescription>
            Effective Date: January 1, 2024 • Last Updated: January 1, 2024
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-700 mb-3">
                By accessing and using the LMS (Learning Management System)
                platform, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the
                above, please do not use this service.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                2. Description of Service
              </h3>
              <p className="text-gray-700 mb-3">
                LMS is a learning management system that provides educational
                content, courses, and tools for online learning. The service
                includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>Access to educational courses and materials</li>
                <li>Interactive learning tools and assessments</li>
                <li>Progress tracking and analytics</li>
                <li>Community features and discussion forums</li>
                <li>Certification and credentialing services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                3. User Accounts
              </h3>
              <p className="text-gray-700 mb-3">
                To access certain features of the service, you must create an
                account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                4. Acceptable Use
              </h3>
              <p className="text-gray-700 mb-3">
                You agree not to use the service to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1 ml-4">
                <li>
                  Violate any local, state, national, or international law
                </li>
                <li>
                  Transmit any harassing, libelous, abusive, or threatening
                  content
                </li>
                <li>
                  Attempt to gain unauthorized access to the service or other
                  accounts
                </li>
                <li>Distribute spam, malware, or other malicious software</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the service or servers</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                5. Intellectual Property
              </h3>
              <p className="text-gray-700 mb-3">
                The service and its original content, features, and
                functionality are owned by LMS and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-3">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our service
                without prior written consent.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                6. Privacy Policy
              </h3>
              <p className="text-gray-700 mb-3">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of the service, to
                understand our practices.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                7. Payment Terms
              </h3>
              <p className="text-gray-700 mb-3">
                Some features of the service may require payment. You agree to
                pay all fees associated with your use of paid features. All fees
                are non-refundable unless otherwise stated.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                8. Termination
              </h3>
              <p className="text-gray-700 mb-3">
                We may terminate or suspend your account and access to the
                service immediately, without prior notice or liability, for any
                reason, including breach of these terms.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                9. Disclaimers
              </h3>
              <p className="text-gray-700 mb-3">
                The service is provided on an "AS IS" and "AS AVAILABLE" basis.
                We make no warranties, expressed or implied, and hereby disclaim
                all other warranties including implied warranties of
                merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                10. Limitation of Liability
              </h3>
              <p className="text-gray-700 mb-3">
                In no event shall LMS, its directors, employees, partners,
                agents, suppliers, or affiliates be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                out of your access to or use of the service.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                11. Changes to Terms
              </h3>
              <p className="text-gray-700 mb-3">
                We reserve the right to modify these terms at any time. We will
                notify users of any changes by posting the new terms on this
                page. Your continued use of the service after such changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                12. Contact Information
              </h3>
              <p className="text-gray-700 mb-3">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-700 text-xs">
                  <strong>Email:</strong> legal@lms.com
                </p>
                <p className="text-gray-700 text-xs">
                  <strong>Address:</strong> LMS Legal Department
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
