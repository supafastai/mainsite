import React from "react";
import Image from "next/image";

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/logos/Supafast-Full-Logo.png"
        alt="logo"
        width={600}
        height={600}
      />
    </div>
  );
}

export default LoadingPage;
