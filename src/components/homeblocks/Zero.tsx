import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

function Zero() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          3 Steps. Zero Guesswork.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Plug In Your Domain",
              description:
                "Drop your domain into SupaFast dashboard and let the system do the rest. No setup headaches. No long forms.",
              delay: 0.2,
            },
            {
              step: "2",
              title: "Let AI Do the Dirty Work",
              description:
                "SupaFast identifies your key competitors, monitors their every move—ads, emails, site updates, product drops—and turns it all into clear, usable insights.",
              delay: 0.4,
            },
            {
              step: "3",
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
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay + 0.2 }}
                      className="w-12 h-12 rounded-full bg-white border-2 border-red-500 text-red-500 flex items-center justify-center text-xl font-bold mb-4"
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
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
