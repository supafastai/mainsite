import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              Contact us:{" "}
              <a
                href="mailto:hello@supafastai.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                hello@supafastai.com
              </a>
            </p>
          </div>

          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} SupaFastAI. All rights reserved.
          </div>
          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
