import React from "react";

export default function ContactUsPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-2 sm:px-6 lg:px-8">
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
        Contact Us
      </h1>
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 text-gray-800 text-base sm:text-lg md:text-xl">
        <p className="mb-4">We&apos;re here to help.</p>
        <p className="mb-6">
          Whether you have a question about your account, need support, or want
          to learn more about SupaFast AI, feel free to reach out — we&apos;re
          happy to assist.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">Email</h2>
        <p className="mb-2">
          For all support, billing, or general inquiries, please contact us at:
        </p>
        <p className="mb-4">
          <a
            href="mailto:info@supafastai.com"
            className="text-blue-600 underline"
          >
            info@supafastai.com
          </a>
        </p>
        <p className="mb-6">We aim to respond within 1-2 business days.</p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">Business Information</h2>
        <p className="mb-4">
          SupaFast AI is a product owned and operated by The Interstellar
          Collective, LLC., a registered company in the State of New Mexico,
          USA.
        </p>
        <p className="mb-6">
          Please note that we do not currently offer in-person support. All
          communications are handled digitally.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">Helpful Links</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="/terms-of-service" className="text-blue-600 underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
