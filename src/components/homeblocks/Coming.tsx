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
        Here&apos;s What You Get 
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg"
      >
        We&apos;re working on these tools right now. Check back soon for
        updates!
      </motion.p>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4">
        {[
          {
            title: "SupaFast Email",
            description:
              "Competitor emails land. You get instant breakdowns to act on",
            color: "border-primary text-primary",
            href: "/tools/emails",
            features: [
              "Real-time email campaign monitoring",
              "AI-powered content analysis",
              "Subject line and offer tracking",
              "Engagement metrics insights",
            ],
          },
          {
            title: "SupaFast Ads",
            description:
              "Their ads go live. You see them — what, where, and how often.",
            color: "border-blue-500 text-blue-500",
            href: "/tools/ads",
            features: [
              "Real-time ad campaign monitoring",
              "AI-powered content analysis",
              "Subject line and offer tracking",
              "Engagement metrics insights",
            ],
          },
          {
            title: "SupaFast Insite",
            description:
              "Their website updates. You spot it — price shifts, new products, and more.",
            color: "border-secondary text-secondary",
            href: "/tools/websites",
            features: [
              "Real-time ad campaign monitoring",
              "AI-powered content analysis",
              "Subject line and offer tracking",
              "Engagement metrics insights",
            ],
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
                <ul className="list-[disc] list-inside space-y-2 text-black [&>li]:marker:text-current">
                  {card.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 + i * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={card.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`w-fit ${card.color} group bg-white border-2 hover:bg-current `}
                    >
                      <span className=" group-hover:text-white">
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
