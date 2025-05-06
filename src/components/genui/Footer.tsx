import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              Contact us:{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 hover:text-blue-800"
              >
                hello@supafastai.com
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SupaFastAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
