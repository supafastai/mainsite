import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Extract card data to a constant outside the component
const FEATURE_CARDS = [
  {
    title: "SupaFast Email",
    description: "Never miss a competitor's email campaign again",
    color: "border-primary text-primary",
    href: "/tools/emails",
    stage: "active",
    painPoints: [
      "Tired of discovering competitor campaigns too late?",
      "Struggling to keep up with their messaging?",
      "Missing out on their best performing offers?",
      "Wasting time manually tracking their emails?",
    ],
    solution:
      "Get instant alerts and AI-powered analysis of every competitor email, so you can respond before your customers do.",
  },
  {
    title: "SupaFast Ads",
    description: "See their ads before your customers do",
    color: "border-blue-500 text-blue-500",
    href: "/tools/ads",
    stage: "active",
    painPoints: [
      "Competitors running ads you don't know about?",
      "Missing their targeting strategies?",
      "Can't keep up with their ad spend?",
      "Losing customers to their promotions?",
    ],
    solution:
      "Monitor their ad campaigns in real-time, understand their strategy, and respond before they steal your market share.",
  },
  {
    title: "SupaFast Insite",
    description: "Never miss a website change again",
    color: "border-secondary text-secondary",
    href: "/tools/websites",
    stage: "active",
    painPoints: [
      "Competitors changing prices without you knowing?",
      "Missing their new product launches?",
      "Can't track their content updates?",
      "Losing sales to their website changes?",
    ],
    solution:
      "Get instant notifications of every website change, from price updates to new products, so you can stay competitive.",
  },
  {
    title: "SupaFast Social",
    description: "Track your competitors' social moves in real-time",
    href: "/",
    color: "border-ring text-ring",
    stage: "coming-soon",

    painPoints: [
      "Struggling to keep up with your competitors' viral posts?",
      "Missing their new ad creatives or campaign rollouts?",
      "Can't tell what content is getting them the most traction?",
      "Feeling left behind on engagement trends?",
    ],
    solution:
      "Get instant visibility into your competitors social strategy—from posts to performance—so you can benchmark, adapt, and lead with data-backed content decisions.",
  },
  {
    title: "SupaFast DataSense",
    description: "Understand what's really working in your business",
    href: "/",
    color: "border-green-500 text-green-500",
    stage: "coming-soon",
    painPoints: [
      "Drowning in metrics but can't find the story?",
      "Hard to tell which channels drive actual results?",
      "Tired of digging through dashboards to make sense of performance?",
      "Wasting time trying to track what matters?",
    ],
    solution:
      "Unify your key performance data into one actionable view—track what matters, eliminate blind spots, and make confident, data-driven decisions in real time.",
  },
];

// Extract card component for better organization
const FeatureCard = React.memo(
  ({ card, index }: { card: (typeof FEATURE_CARDS)[0]; index: number }) => (
    <motion.div
      key={card.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="w-full"
    >
      <Card
        className={`  border-t-4 ${card.color} flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 h-full bg-white`}
      >
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            {card.title}
          </CardTitle>
          <CardDescription className="text-base sm:text-lg">
            {card.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            <ul className="list-[disc] list-inside space-y-1 sm:space-y-2 text-black [&>li]:marker:text-current">
              {card.painPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 + i * 0.1 }}
                  className="text-sm sm:text-base text-gray-600"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm font-medium text-gray-800 mt-3 sm:mt-4">
              {card.solution}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-4 sm:p-6">
          <Link href={card.href} aria-label={`Get ${card.title}`}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className={`w-fit ${card.color} group bg-white border-2 hover:bg-current text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3`}
              >
                <span className="group-hover:text-white">
                  {card.stage === "coming-soon"
                    ? "Coming Soon"
                    : `Get ${card.title}`}
                </span>
              </Button>
            </motion.div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
);

FeatureCard.displayName = "FeatureCard";

function Coming() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-3 sm:gap-4 w-full bg-white/90 backdrop-blur-sm p-3 sm:p-4 md:p-8 items-start justify-between rounded-2xl sm:rounded-4xl my-4 sm:my-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl sm:text-3xl font-bold"
      >
        Your SupaFast Advantage
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg"
      >
        Don&apos;t let competitors outmaneuver you. Get real-time insights and
        stay ahead of the game.
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3 sm:gap-4">
        {FEATURE_CARDS.map((card, index) => (
          <div
            key={card.title}
            className={`${index === 0 ? "lg:col-span-2" : ""}`}
          >
            <FeatureCard card={card} index={index} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default React.memo(Coming);
