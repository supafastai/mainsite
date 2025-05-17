import React from "react";
import { motion } from "framer-motion";
// Alternative icons you might prefer:
// import { HiOutlineMail, HiOutlineLightBulb, HiOutlineBell } from 'react-icons/hi'; // Heroicons
// import { BsEnvelope, BsLightning, BsBell } from 'react-icons/bs'; // Bootstrap icons

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode; // Changed from string to ReactNode
}

interface FeaturesProps {
  title?: string;
  features: Feature[];
}

function Features({ title = "What You Get", features }: FeaturesProps) {
  // Add color array for icons
  const iconColors = [
    "text-blue-600",
    "text-purple-600",
    "text-green-600",
    "text-red-600",
    "text-indigo-600",
    "text-pink-600",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center ${
                    iconColors[index % iconColors.length]
                  }`}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
