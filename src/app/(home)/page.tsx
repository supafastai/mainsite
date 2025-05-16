"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import Coming from "@/components/homeblocks/Coming";
import Buildnext from "@/components/homeblocks/Buildnext";
import Faq from "@/components/homeblocks/Faq";
import Zero from "@/components/homeblocks/Zero";
export default function Home() {
  return (
    <div>
      <div className=" z-0 flex flex-col md:flex-row bg-white/90 backdrop-blur-sm  p-4 md:p-8 items-center justify-between rounded-4xl w-full h-full gap-10 group">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 text-left items-start justify-center max-w-xl px-4 md:px-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Your Competitors Are Moving Fast. <br />
            You? You&apos;re moving SupaFast
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700"
          >
            SupaFast puts competitor strategies right where they belong — in
            your hands.
            <br className="hidden md:block" />
            <i>Built by marketers + engineers behind $13M+ in ad spend</i>
            <br />
            Join our waitlist to get
            <span className="relative cursor-pointer ">
              {" "}
              early access
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="mt-2 hover:scale-105 transition-transform">
              Join waitlist
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full md:w-auto mt-8 md:mt-0"
        >
          <Image
            src="/siteimgs/dashboard-widget-refined.svg"
            alt="Hero Image"
            className="w-full max-w-[1000px] h-auto"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>{" "}
      <Coming />
      <Zero />
      <Faq />
      <Buildnext />
    </div>
  );
}
