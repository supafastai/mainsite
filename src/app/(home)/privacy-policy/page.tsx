import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-2 sm:px-6 lg:px-8">
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
        Privacy Policy
      </h1>
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 text-gray-800 text-base sm:text-lg md:text-xl">
        <p>
          <strong>Effective Date:</strong> 7-4-2025
        </p>
        <p>
          <strong>Last Updated:</strong> 7-4-2025
        </p>
        <p className="mt-6">
          Your privacy matters to us. This Privacy Policy explains how SupaFast
          AI, a product owned and operated by The Interstellar Collective, LLC..
          (“SupaFast,” “we,” “us,” or “our”), collects, uses, and protects the
          personal information you provide when you visit or use our website and
          services.
        </p>
        <p>
          By accessing or using SupaFast AI, you agree to the practices
          described in this Privacy Policy.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">
          1. Information We Collect
        </h2>
        <p>
          We collect the following types of information when you use SupaFast:
        </p>
        <p className="font-semibold mt-4">a. Information You Provide</p>
        <ul className="list-disc ml-6">
          <li>Account Details: Name, email address, password</li>
          <li>
            Billing Info: Payment details submitted through Stripe (we
            don&apos;t store credit card data)
          </li>
          <li>Support Requests: Any messages or feedback you send to us</li>
        </ul>
        <p className="font-semibold mt-4">b. Automatically Collected Data</p>
        <ul className="list-disc ml-6">
          <li>Usage Information: Pages visited, clicks, time spent, etc.</li>
          <li>
            Device Info: Browser type, IP address, device type, and operating
            system
          </li>
          <li>
            Cookies: Small data files that help us remember your preferences and
            analyze behaviour (see Section 6)
          </li>
        </ul>

        <h2 className="mt-8 mb-2 text-2xl font-bold">
          2. How We Use Your Information
        </h2>
        <p>We use your information to:</p>
        <ul className="list-disc ml-6">
          <li>Create and manage your account</li>
          <li>Provide and maintain our services</li>
          <li>Process payments and subscription renewals</li>
          <li>Respond to inquiries and provide support</li>
          <li>Improve our platform performance and features</li>
          <li>Detect, prevent, or investigate fraud and abuse</li>
          <li>Send you important account or product-related updates</li>
        </ul>
        <p>We do not sell your personal information to anyone.</p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">
          3. How We Share Information
        </h2>
        <p>
          We only share your information with trusted third parties when
          necessary to run our services:
        </p>
        <ul className="list-disc ml-6">
          <li>Payment processing: Stripe</li>
          <li>Analytics & performance: Google Analytics, or similar tools</li>
          <li>Cloud hosting & infrastructure: Secure third-party providers</li>
          <li>
            Legal obligations: When required by law, subpoena, or to protect our
            rights
          </li>
        </ul>
        <p>
          Each provider is required to maintain the confidentiality and security
          of your data.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">4. Data Retention</h2>
        <p>
          We retain your personal information only as long as necessary to
          provide services and comply with legal obligations.
        </p>
        <p>
          You may request deletion of your account at any time by contacting us
          at{" "}
          <a
            href="mailto:info@supafastai.com"
            className="text-blue-600 underline"
          >
            info@supafastai.com
          </a>
          . We will honour verified requests unless data must be retained for
          legal, accounting, or security reasons.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">5. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc ml-6">
          <li>Access a copy of the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to or limit certain data uses</li>
          <li>Request data portability</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a
            href="mailto:info@supafastai.com"
            className="text-blue-600 underline"
          >
            info@supafastai.com
          </a>
          . We may verify your identity before processing your request.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">
          6. Cookies and Tracking Technologies
        </h2>
        <p>SupaFast uses cookies to:</p>
        <ul className="list-disc ml-6">
          <li>Remember your login and preferences</li>
          <li>Understand how users interact with the platform</li>
          <li>Improve performance and user experience</li>
        </ul>
        <p>
          You can modify your browser settings to refuse non-essential cookies.
          Some features may not work properly if cookies are disabled.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">7. Data Security</h2>
        <p>
          We use industry-standard encryption, access controls, and secure
          servers to protect your data.
        </p>
        <p>
          However, no method of transmission over the internet is 100% secure.
          You use the Service at your own risk.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">8. International Users</h2>
        <p>
          SupaFast AI is operated from the United States. If you are accessing
          our services from outside the U.S., be aware that your data may be
          transferred to and processed in the U.S., where data protection laws
          may differ.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">
          9. Children&apos;s Privacy
        </h2>
        <p>
          SupaFast AI is not intended for users under 18. We do not knowingly
          collect personal data from children. If you believe we have, please
          contact us immediately at{" "}
          <a
            href="mailto:info@supafastai.com"
            className="text-blue-600 underline"
          >
            info@supafastai.com
          </a>{" "}
          so we can delete it.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">
          10. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will always be available on this page, with a revised “Last
          Updated” date.
        </p>
        <p>
          We encourage you to review this page periodically to stay informed.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">11. Contact Us</h2>
        <p>
          For any questions or concerns about this Privacy Policy or how your
          data is handled, please contact:
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:info@supafastai.com"
            className="text-blue-600 underline"
          >
            info@supafastai.com
          </a>
        </p>
      </div>
    </div>
  );
}
