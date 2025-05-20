import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaShoppingCart, FaUsers } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Perfect() {
  const cards = [
    {
      title: "Marketers",
      text: "Outwit and out-send your competitors. Every email they send feeds your next campaign.",
      icon: <FaChartLine className="w-8 h-8 text-blue-600 mb-4" />,
    },
    {
      title: "E-Commerce",
      text: "Know when they discount, bundle, or launch, and beat them to the punch.",
      icon: <FaShoppingCart className="w-8 h-8 text-green-600 mb-4" />,
    },
    {
      title: "Agencies",
      text: "Bring clients battle-ready insights and level up your retainers. Easy win.",
      icon: <FaUsers className="w-8 h-8 text-purple-600 mb-4" />,
    },
  ];

  return (
    <section className="py-24 px-4 sm:p-4 md:p-8 ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left mb-8 md:mb-16 bg-gradient-to-r from-black to-black bg-clip-text text-transparent"
      >
        Perfect For
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="flex flex-col sm:flex-row md:flex-col items-start gap-3 sm:gap-4 md:gap-0">
              <div className="sm:mt-1 md:mb-4">{card.icon}</div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4 text-black">
                  {card.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-black/80">
                  {card.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Perfect;
