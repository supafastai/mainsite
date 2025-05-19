import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

function Zero() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          3 Steps. Zero Guesswork.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              step: "1",
              color: "border-red-500 text-red-500",
              title: "Plug In Your Domain",
              description:
                "Drop your domain into SupaFast dashboard and let the system do the rest. No setup headaches. No long forms.",
              delay: 0.2,
            },
            {
              step: "2",
              color: "border-blue-500 text-blue-500",
              title: "Let AI Do the Dirty Work",
              description:
                "SupaFast identifies your key competitors, monitors their every move—ads, emails, site updates, product drops—and turns it all into clear, usable insights.",
              delay: 0.4,
            },
            {
              step: "3",
              color: "border-green-500 text-green-500",
              title: "Take Action Instantly",
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
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="px-3 sm:px-5 md:px-6">
                  <div className="flex flex-col gap-1 items-start  text-left">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay + 0.2 }}
                      className={`w-6 h-6 p-1 rounded-full bg-white border-2 ${item.color} flex items-center justify-center text-lg sm:text-xl font-bold `}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold ">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Zero;
