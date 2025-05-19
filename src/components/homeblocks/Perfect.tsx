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
      icon: <FaChartLine className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      title: "E-Commerce",
      text: "Know when they discount, bundle, or launch, and beat them to the punch.",
      icon: <FaShoppingCart className="w-8 h-8 text-green-600 mb-4" />
    },
    {
      title: "Agencies",
      text: "Bring clients battle-ready insights and level up your retainers. Easy win.",
      icon: <FaUsers className="w-8 h-8 text-purple-600 mb-4" />
    },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-black to-black bg-clip-text text-transparent"
      >
        Perfect For
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
          >
            {card.icon}
            <h3 className="text-2xl font-semibold mb-4 text-black">
              {card.title}
            </h3>
            <p className="text-base leading-relaxed text-black/80">
              {card.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Perfect;
