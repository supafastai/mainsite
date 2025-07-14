import React from "react";

export default function AboutUsPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-2 sm:px-6 lg:px-8">
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
        About SupaFast AI
      </h1>
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 text-gray-800 text-base sm:text-lg md:text-xl">
        <p className="italic text-xl sm:text-2xl mb-6 font-semibold">
          Accelerate Your Vision.
        </p>
        <p className="mb-6">
          SupaFast AI is a product owned and operated by Interstellar Collective
          Inc., created to help fast-moving companies and startups execute at
          the speed of ideas.
        </p>
        <p className="mb-6">
          We build AI-powered automations, scrapers, workflows, and backend
          systems that streamline operations, cut costs, and unlock new revenue.
          Whether you&apos;re launching a product, scaling a store, or trying to
          outpace the competition, SupaFast is designed to help you move
          quickly, intelligently, and with less friction.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">Why We Exist</h2>
        <p className="mb-6">
          SupaFast AI was born from our team&apos;s shared frustration with
          bloated dev cycles, unnecessary meetings, and feature creep. We knew
          AI and automation could simplify execution — so we built a smarter
          workflow to prove it.
        </p>
        <p className="mb-6">
          Now, that same principle drives everything we build: powerful tools
          that help you ship faster, think sharper, and act without waiting for
          approvals or engineers.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">What We Do</h2>
        <p className="mb-6">
          Our core product suite focuses on ready-to-use AI tools that track
          competitors, monitor trends, and give you instant operational
          leverage. From automated scrapers to smart workflow builders, we
          create solutions that solve real problems — often before teams even
          know they need them.
        </p>
        <p className="mb-6">
          We also partner with lean agencies and startups to deliver
          custom-built automation systems, backend infrastructure, and
          integrations, tailored for speed and experimentation.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">How We Operate</h2>
        <p className="mb-4">We follow an 80/20 model:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            80% of our energy goes into building general-purpose, intelligent
            tools we believe the world needs — before it even asks.
          </li>
          <li>
            20% is reserved for bespoke builds: custom workflows, agency
            systems, and done-for-you backend solutions.
          </li>
        </ul>

        <h2 className="mt-8 mb-2 text-2xl font-bold">Who We&apos;re For</h2>
        <p className="mb-4">SupaFast is built for:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            Startups that move fast and break things (but still need structure)
          </li>
          <li>Product-first teams that value execution over talk</li>
          <li>Agencies and growth leads who need systems that just work</li>
        </ul>
        <p className="mb-6">
          If your team thrives on speed, clarity, and experimentation —
          we&apos;re building for you.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold">
          Where We&apos;re Headed
        </h2>
        <p className="mb-6">
          In five years, our goal is to become the go-to solutions partner for
          lean, product-led companies — the secret weapon behind the
          world&apos;s most automated, efficient, and experimental teams.
        </p>
        <p className="mb-2">And we&apos;re moving fast to get there.</p>
      </div>
    </div>
  );
}
