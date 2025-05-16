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
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center ${
                    iconColors[index % iconColors.length]
                  }`}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
