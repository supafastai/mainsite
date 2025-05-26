import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
function Zero() {
  return (
    <section className="w-full flex flex-col items-center justify-center sm:h-screen py-8 sm:py-12 md:py-16 px-4 sm:p-4 md:p-8 ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12"
      >
        3 Steps. Zero Guesswork.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {[
          {
            step: "1",
            color: "border-red-500 text-red-500",
            title: "Plug In Your Domain",
            image: "/images/1.png",
            description:
              "Drop your domain into SupaFast dashboard and let the system do the rest. No setup headaches. No long forms.",
            delay: 0.2,
          },
          {
            step: "2",
            color: "border-blue-500 text-blue-500",
            title: "Let AI Do the Dirty Work",
            image: "/images/2.png",
            description:
              "SupaFast identifies your key competitors, monitors their every move—ads, emails, site updates, product drops—and turns it all into clear, usable insights.",
            delay: 0.4,
          },
          {
            step: "3",
            color: "border-green-500 text-green-500",
            title: "Take Action Instantly",
            image: "/images/3.png",
            description:
              "Use insights to counter, improve and stay ahead every day.",
            delay: 0.6,
          },
        ].map((item) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            <Card className="h-full bg-white shadow-none border-0 ">
              <CardContent className="px-3 sm:px-5 md:px-6">
                <div className="flex flex-col gap-3 items-start text-left">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay + 0.2 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Zero;
