"use client";

import { Button } from "@/components/ui/button";

import { motion } from "motion/react";
import Coming from "@/components/homeblocks/Coming";
import Faq from "@/components/homeblocks/Faq";
import Zero from "@/components/homeblocks/Zero";
import Perfect from "@/components/homeblocks/Perfect";
import Buildnext from "@/components/homeblocks/Buildnext";
import CTA from "@/components/homeblocks/CTA";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <div className="z-0 flex flex-col  bg-white/90 backdrop-blur-sm p-4 md:p-8 items-center justify-between rounded-4xl w-full h-full gap-6 md:gap-10 group">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col gap-4 md:gap-8 text-center items-center justify-center  px-0 md:px-4 lg:px-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Your Competitors Are Moving Fast. <br className="hidden sm:block" />
            Stay ahead of every move with SupaFast.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-700"
          >
            SupaFast puts competitor strategies right where they belong — in
            your hands.
            <br className="hidden md:block" />
            Join our waitlist to get early access
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              onClick={() => router.push("/signup")}
              className="mt-2 hover:scale-105 transition-transform text-lg sm:text-xl md:text-2xl font-semibold px-6 sm:px-8 md:px-10 py-6 md:py-8 bg-gradient-to-r from-secondary to-primary"
            >
              Join waitlist
            </Button>
            <p className="mt-4 text-sm sm:text-base font-lufga font-semibold text-gray-600 italic">
              Built by marketers + engineers behind $13M+ in ad spend
            </p>
          </motion.div>
        </motion.div>
      </div>{" "}
      <Zero />
      <Perfect />
      <Coming />
      <Buildnext />
      <Faq />
      <CTA />
    </div>
  );
}
