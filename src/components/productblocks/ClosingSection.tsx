import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

interface BulletPoint {
  text: string;
}

interface ClosingSectionProps {
  title?: string;
  subtitle?: string;
  bulletPoints: BulletPoint[];
}

function ClosingSection({
  title = "Make It Count",
  subtitle = "You've got the insight. What's your next move?",
  bulletPoints,
}: ClosingSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 italic">{subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          {bulletPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <motion.div
                className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FiCheck className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {point.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ClosingSection;
