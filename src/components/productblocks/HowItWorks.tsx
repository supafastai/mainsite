import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  steps: Step[];
}

function HowItWorks({ title = "How It Works", steps }: HowItWorksProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative py-8"
        >
          {/* Connecting line - adjusted positioning and z-index */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className={`relative flex flex-col md:flex-row items-center mb-24 md:mb-32 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step number circle - added z-index */}
              <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center z-10 mb-4 md:mb-0">
                <span className="text-2xl font-bold text-black">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <FiArrowDown className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
