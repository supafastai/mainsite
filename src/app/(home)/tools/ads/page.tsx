"use client";

import React from "react";
import ProductHero from "@/components/productblocks/ProductHero";
import Features from "@/components/productblocks/Features";
import { FiActivity, FiEdit, FiSearch } from "react-icons/fi"; // Feather icons
import HowItWorks from "@/components/productblocks/HowItWorks";
import ClosingSection from "@/components/productblocks/ClosingSection";
import CTA from "@/components/homeblocks/CTA";
function AdProductPage() {
  const heroData = {
    headline: "Every Ad They Run. Every Move They Make Sent To Your Inbox",
    subheadline:
      "SupaFast Ads gives you full visibility into your competitors' ad strategy. What they&apos;re running, where they&apos;re running it, and how often — all in real time.",
    ctaText: "Show Me The Ads",
    ctaLink: "/signup",
  };

  const features = [
    {
      title: "Real-time Ad Tracking",
      description:
        "See every live campaign across Meta, Google, and more — the moment it launches.",
      icon: <FiActivity className="w-6 h-6" />,
    },
    {
      title: "Creative Breakdown",
      description:
        "We dissect visuals, copy, targeting signals, and landing pages so you can learn what&apos;s working.",
      icon: <FiEdit className="w-6 h-6" />,
    },
    {
      title: "Cross-Platform Clarity",
      description:
        "No more guessing where they&apos;re spending. Get the full picture across channels in one view.",
      icon: <FiSearch className="w-6 h-6" />,
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Tag Competitors",
      description:
        "Pick the brands you want to monitor — across any industry or region.",
    },
    {
      number: 2,
      title: "We Capture and Analyse",
      description:
        "Our system pulls ads, categorises them by platform, and breaks down the strategy.",
    },
    {
      number: 3,
      title: "You React Smarter",
      description:
        "Shift spend, rotate creative, or launch counter-offers—before performance slips.",
    },
  ];

  const bulletPoints = [
    {
      text: "Catch budget ramps in real time — so you know when a competitor is scaling",
    },
    {
      text: "Monitor creative fatigue cycles — and avoid launching with worn-out angles",
    },
    {
      text: "Spot offer pivots — so you&apos;re not still pushing bundles when the space is back to single SKUs",
    },
    {
      text: "Track spend velocity by platform — and shift your own mix accordingly",
    },
    {
      text: "Time your launches to disrupt, not overlap — avoid high-CAC bidding wars",
    },
    {
      text: "Reverse-engineer conversion objectives — acquisition vs. retargeting vs. retention",
    },
  ];
  return (
    <div className="bg-white flex flex-col gap-10">
      <ProductHero data={heroData} />
      <Features features={features} />
      <HowItWorks steps={steps} />
      <ClosingSection
        title="Make It Count"
        subtitle="This isn't just intel. It's how you defend your ROAS—and beat competitors to profitable ground."
        bulletPoints={bulletPoints}
      />
      <CTA /> 
    </div>
  );
}

export default AdProductPage;
