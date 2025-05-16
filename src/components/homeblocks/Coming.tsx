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

function Coming() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 w-full bg-white/90 backdrop-blur-sm  p-4 md:p-8 items-start justify-between rounded-4xl my-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
      >
        Stop Playing Catch-Up
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg"
      >
        Don&apos;t let competitors outmaneuver you. Get real-time insights and
        stay ahead of the game.
      </motion.p>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4">
        {[
          {
            title: "SupaFast Email",
            description: "Never miss a competitor's email campaign again",
            color: "border-primary text-primary",
            href: "/tools/emails",
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
            painPoints: [
              "Competitors changing prices without you knowing?",
              "Missing their new product launches?",
              "Can't track their content updates?",
              "Losing sales to their website changes?",
            ],
            solution:
              "Get instant notifications of every website change, from price updates to new products, so you can stay competitive.",
          },
        ].map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="w-full md:w-1/3"
          >
            <Card
              className={`border-t-4 ${card.color} flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 h-full bg-white`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="list-[disc] list-inside space-y-2 text-black [&>li]:marker:text-current">
                    {card.painPoints.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.1 }}
                        className="text-gray-600"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-gray-800 mt-4">
                    {card.solution}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={card.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`w-fit ${card.color} group bg-white border-2 hover:bg-current`}
                    >
                      <span className="group-hover:text-white">
                        Get {card.title}
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Coming;
