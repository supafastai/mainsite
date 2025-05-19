"use client";

import React from "react";
import ProductHero from "@/components/productblocks/ProductHero";
import Features from "@/components/productblocks/Features";
import { FiMail, FiCpu, FiBell } from "react-icons/fi"; // Feather icons
import HowItWorks from "@/components/productblocks/HowItWorks";
import ClosingSection from "@/components/productblocks/ClosingSection";

function AdProductPage() {
  const heroData = {
    headline: "Stay Ahead of Every Campaign",
    subheadline:
      "SupaFast Email monitors the competition's email marketing in real time. See what they're sending, when they're sending it, and why it matters — no guesswork, no cluttered inbox.",
    ctaText: "Show Me The Emails",
    ctaLink: "/signup",
  };

  const features = [
    {
      title: "Real-time Inbox Spying",
      description:
        "See competitor emails the second they drop. No need to sign up yourself or check later.",
      icon: <FiMail className="w-6 h-6" />, // or any other icon component
    },
    {
      title: "AI-Powered Content Dissection",
      description:
        "We break down their offers, CTAs, designs, hooks and timing. You get strategy, not noise.",
      icon: <FiCpu className="w-6 h-6" />,
    },
    {
      title: "Smart Alerts",
      description:
        "Get pinged when competitors push discounts, launch products, or try sneaky moves",
      icon: <FiBell className="w-6 h-6" />,
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
    </div>
  );
}

export default AdProductPage;
