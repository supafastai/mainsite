import React from "react";
import Script from "next/script";

function Page() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      <iframe
        data-tally-src="https://tally.so/r/mKyJjD?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Signup Form"
        className="absolute inset-0 border-0"
      />
    </div>
  );
}

export default Page;
