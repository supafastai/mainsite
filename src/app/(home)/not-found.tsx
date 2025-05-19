import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto text-center px-4">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-primary text-white font-medium transition-all hover:shadow-lg hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
