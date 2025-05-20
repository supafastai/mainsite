import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20  ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-left">
            Ready to Get Started?
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black/80 ">
            Join thousands of users who are already transforming their workflow.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/signup"
              className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-secondary to-primary text-white font-medium rounded-lg text-xl sm:text-2xl md:text-3xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Sign Up Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
