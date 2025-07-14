"use client";

import React from "react";
import { motion } from "framer-motion";

const termsHtml = `
<h1><strong>Terms of Service</strong></h1>
<p><strong>Effective Date:</strong> 7-4-2025</p>
<p><strong>Last Updated:</strong> 7-4-2025</p>
<p>Welcome to SupaFast AI! These Terms of Service (“Terms”) govern your access to and use of the SupaFast AI website, tools, and services (collectively, the “Service”).</p>
<p>By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use SupaFast AI.</p>
<p>These Terms form a legally binding agreement between you (“you” or “User”) and Interstellar Collective Inc., doing business as SupaFast AI (“SupaFast,” “we,” “our,” or “us”).</p>
<p>Please also review our <a href="https://supafastai.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://supafastai.com/contact" target="_blank" rel="noopener noreferrer">Contact Page</a> for additional information.</p>

<h2><strong>1. Eligibility</strong></h2>
<p>You must be at least 18 years old, or the legal age of majority in your jurisdiction, to use SupaFast AI. If you use the Service on behalf of a business or organisation, you confirm that you are authorised to bind them to these Terms.</p>

<h2><strong>2. Description of Service</strong></h2>
<p>SupaFast AI is a Software-as-a-Service (SaaS) platform offering tools that monitor public-facing competitor activity—such as pricing, ad campaigns, email strategies, and more—to help users make data-driven business decisions.</p>
<p>We reserve the right to add, modify, or remove features at any time, without notice.</p>

<h2><strong>3. User Accounts</strong></h2>
<p>To use most features, you must create an account. You are responsible for keeping your login credentials secure. You must notify us immediately of any unauthorised use.</p>
<p>We are not responsible for any loss resulting from your failure to safeguard your account.</p>

<h2><strong>4. Subscriptions, Billing, and Free Trials</strong></h2>
<p>SupaFast AI operates on a subscription basis and uses Stripe as our payment processor. By subscribing, you authorise us to charge your chosen payment method on a recurring basis (monthly or annually).</p>
<ul>
  <li>Free Trial: We offer a 14-day free trial. Unless you cancel before the trial ends, your subscription will begin automatically and the applicable fee will be charged.</li>
  <li>Auto-Renewal: Your subscription will renew automatically unless cancelled before the end of your billing cycle.</li>
  <li>Billing Changes: We may change pricing with prior notice.</li>
  <li>Failed Payments: If payment fails, we may suspend your access until it’s resolved.</li>
</ul>

<h2><strong>5. Refund and Cancellation Policy</strong></h2>
<p>We understand that business needs can change. While we do not offer refunds, we provide a 14-day free trial so you can explore SupaFast AI and ensure it’s the right fit for you before any charges apply.</p>
<p>All payments are final, and we do not issue refunds for subscriptions once billing begins. This includes charges after the free trial, renewals, or unused time within a billing cycle.</p>
<ul>
  <li>You may cancel your subscription at any time through your account dashboard.</li>
  <li>Cancellations take effect at the end of the current billing cycle, and no further charges will apply.</li>
  <li>You will retain access until the cycle ends, but no partial refunds are issued for unused time.</li>
</ul>

<h2><strong>6. Acceptable Use</strong></h2>
<p>You agree not to misuse the Service. This includes, but is not limited to:</p>
<ul>
  <li>Scraping, copying, or reverse-engineering our platform</li>
  <li>Attempting to bypass security features</li>
  <li>Sharing your account credentials</li>
  <li>Using the platform for illegal or harmful activities</li>
  <li>Violating third-party intellectual property rights</li>
</ul>
<p>We reserve the right to suspend or terminate accounts that violate this policy.</p>

<h2><strong>7. Intellectual Property</strong></h2>
<p>All content, code, branding, designs, and intellectual property on the Service belong to SupaFast AI or our licensors.</p>
<p>Youre granted a limited, non-transferable, non-exclusive right to use the Service for your internal business needs.</p>
<p>You may not reuse, resell, modify, or reproduce any part of the Service without written permission.</p>
<p>Any feedback or suggestions you provide may be used by us without obligation or compensation.</p>

<h2><strong>8. Termination</strong></h2>
<p>We may suspend or terminate your account at our discretion, including for violations of these Terms or misuse of the Service.</p>
<p>You may cancel your subscription at any time. Access will remain active until the end of your billing period.</p>

<h2><strong>9. Third-Party Services</strong></h2>
<p>SupaFast AI may integrate with third-party tools and platforms (e.g. Stripe, Google Analytics).</p>
<p>We are not responsible for the actions, terms, or content of these third-party services. Your use of them is at your own risk and subject to their terms.</p>

<h2><strong>10. Disclaimers</strong></h2>
<p>The Service is provided “as is” and “as available.”</p>
<p>We make no guarantees about availability, reliability, or performance. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>

<h2><strong>11. Limitation of Liability</strong></h2>
<p>To the maximum extent permitted by law, SupaFast AI and Interstellar Collective Inc. shall not be liable for indirect, incidental, special, or consequential damages, including lost profits, data loss, or business interruption.</p>
<p>Our total liability will not exceed the amount paid by you for the Service in the twelve (12) months prior to the claim.</p>

<h2><strong>12. Governing Law</strong></h2>
<p>These Terms are governed by the laws of the State of New Mexico, United States, without regard to conflict of law rules.</p>

<h2><strong>13. Dispute Policy</strong></h2>
<p>If you experience a billing issue or other dispute, please contact us first at <a href="mailto:info@supafastai.com">info@supafastai.com</a> to attempt informal resolution.</p>
<p>If the issue cannot be resolved within 30 days:</p>
<ul>
  <li>Either party may submit the dispute to binding arbitration, conducted in English, in accordance with the rules of a recognised arbitration body.</li>
  <li>Alternatively, eligible claims may be brought in small claims court.</li>
</ul>
<p>You and SupaFast agree to bring disputes only on an individual basis, not as part of a class or representative action, unless prohibited by law.</p>

<h2><strong>14. Changes to These Terms</strong></h2>
<p>We may revise these Terms from time to time. If we make material changes, we will notify you by updating the “Last Updated” date or contacting you via email.</p>
<p>By continuing to use the Service after changes take effect, you agree to the updated Terms.</p>
<p>For questions or concerns, email us at <a href="mailto:info@supafastai.com">info@supafastai.com</a> or visit our <a href="https://supafastai.com/contact" target="_blank" rel="noopener noreferrer">Contact Page</a>.</p>
`;

export default function TermsOfServicePage() {
  return (
    <div className=" w-full flex flex-col items-center justify-center py-8 px-2 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className=" text-black text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8"
      >
        Terms of Service
      </motion.h1>

      <div dangerouslySetInnerHTML={{ __html: termsHtml }} />
    </div>
  );
}
