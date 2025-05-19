"use client";

import React from "react";
import ProductHero from "@/components/productblocks/ProductHero";
import Features from "@/components/productblocks/Features";
import { FiFileText, FiTablet, FiGlobe } from "react-icons/fi"; // Feather icons
import HowItWorks from "@/components/productblocks/HowItWorks";
import ClosingSection from "@/components/productblocks/ClosingSection";
import CTA from "@/components/homeblocks/CTA";
function WebsiteProductPage() {
  const heroData = {
    headline: "Uncover Messaging. Spot Intent.",
    subheadline:
      "SupaFast Insite tracks how your competitors shift messaging, pricing, and offer strategy through their websites, so you know where they&apos;re headed before they announce it.",
    ctaText: "Show Me Their In-Site",
    ctaLink: "/signup",
  };

  const features = [
    {
      title: "Live Site Monitoring",
      description:
        "Instant alerts when landing pages, pricing, or funnel structure changes. No more surprises.",
      icon: <FiGlobe className="w-6 h-6" />,
    },
    {
      title: "Messaging & Offer Strategy",
      description:
        "See how they position products, frame urgency, and rewrite value props; headline to CTA.",
      icon: <FiFileText className="w-6 h-6" />,
    },
    {
      title: "Cross-Platform Clarity",
      description:
        "No more guessing where they&apos;re spending. Get the full picture across channels in one view.",
      icon: <FiTablet className="w-6 h-6" />,
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Tag Competitors",
      description:
        "Add the brands you want to keep an eye on. Big, small, or sneaky.",
    },
    {
      number: 2,
      title: "We Break It Down",
      description:
        "Subject lines, timing, call-to-actions — our AI slices it up.",
    },
    {
      number: 3,
      title: "You Get The Edge",
      description: "You see the moves. You adjust your playbook. You win.",
    },
  ];

  const bulletPoints = [
    { text: "Spot discount trends before they hit your audience" },
    { text: "Track when they launch, pause, or ramp up" },
    { text: "Find high-performing subject lines to borrow (or beat)" },
    { text: "Time your campaigns to land before theirs" },
    { text: "Identify gaps in their messaging you can dominate" },
    { text: "Avoid repeating their boring, bloated promos" },
  ];
  return (
    <div className="bg-white flex flex-col gap-10">
      <ProductHero data={heroData} />
      <Features features={features} />
      <HowItWorks steps={steps} />
      <ClosingSection
        title="Make It Count"
        subtitle="You've got the insight. What's your next move?"
        bulletPoints={bulletPoints}
      />
      <CTA />
    </div>
  );
}

export default WebsiteProductPage;
