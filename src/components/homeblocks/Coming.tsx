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
import Image from "next/image";

// Extract card data to a constant outside the component
const FEATURE_CARDS = [
  {
    title: "Email",
    description: "Never miss a competitor's email campaign again",
    color: "border-primary text-primary",
    href: "/tools/emails",
    stage: "active",
    image: "/siteimgs/email-dashboard.png",
    switch: true,
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
    title: "Ads",
    description: "See their ads before your customers do",
    color: "border-blue-500 text-blue-500",
    href: "/",
    stage: "coming-soon",
    image: "/images/ads.png",
    switch: false,
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
    title: "Insite",
    description: "Never miss a website change again",
    color: "border-secondary text-secondary",
    href: "/",
    stage: "coming-soon",
    image: "/images/1.png",
    switch: false,

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
    title: "Social",
    description: "Track your competitors' social moves in real-time",
    href: "/",
    color: "border-ring text-ring",
    stage: "coming-soon",
    image: "/images/6.png",
    switch: false,
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
    title: "DataSense",
    description: "Understand what's really working in your business",
    href: "/",
    color: "border-green-500 text-green-500",
    stage: "coming-soon",
    image: "/images/2.png",
    switch: false,
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

// ... existing code ...

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
        className={`border-0 hover:shadow shadow-none flex flex-col ${
          card.switch ? "lg:flex-row" : "flex-col items-center"
        } justify-between h-full bg-white`}
      >
        <div className="flex flex-col flex-1 w-full lg:min-w-1/2 ">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl  font-bold">
              {card.title}
            </CardTitle>
            <CardDescription className="text-base sm:text-lg md:text-xl text-gray-800">
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-950 ">
              {card.solution}
            </p>
          </CardContent>
          <CardFooter className="p-4 sm:p-6">
            <Link href={card.href} aria-label={`Get ${card.title}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={`w-fit text-black group bg-white border-2 hover:bg-current text-base sm:text-lg md:text-xl px-4 sm:px-6 py-2 sm:py-3`}
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
        </div>
        {card.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="relative w-full "
          >
            <Image
              src={card.image}
              alt={`${card.title} dashboard preview`}
              className=" w-full sm:max-w-[450px] h-fit mx-auto"
              width={300}
              height={300}
            />
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
);

// ... existing code ...
FeatureCard.displayName = "FeatureCard";

function Coming() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full gap-3 sm:gap-4 w-full bg-white/90 backdrop-blur-sm p-4 md:p-8 items-center justify-between rounded-2xl sm:rounded-4xl my-4 sm:my-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl sm:text-5xl  font-bold text-center w-full"
      >
        Your SupaFast Advantage
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg sm:text-xl md:text-2xl text-center"
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
