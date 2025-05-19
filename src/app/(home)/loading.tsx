import React from "react";
import Image from "next/image";

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white/80 backdrop-blur-sm">
      <div className="relative transform transition-all duration-700 ease-in-out animate-pulse">
        <Image
          src="/logos/Supafast-Full-Logo.png"
          alt="Supafast AI Logo"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default LoadingPage;
