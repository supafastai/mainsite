import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaThumbsUp } from "react-icons/fa";

interface BusinessPriority {
  id: number;
  text: string;
  votes: number;
  timestamp: Date;
}

function BusinessPriorities() {
  const [priorities, setPriorities] = useState<BusinessPriority[]>([]);
  const [newPriority, setNewPriority] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPriority.trim()) return;

    const priority: BusinessPriority = {
      id: Date.now(),
      text: newPriority.trim(),
      votes: 0,
      timestamp: new Date(),
    };

    setPriorities([...priorities, priority]);
    setNewPriority("");
  };

  const handleVote = (id: number) => {
    setPriorities(
      priorities.map((priority) =>
        priority.id === id
          ? { ...priority, votes: priority.votes + 1 }
          : priority
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-screen items-center justify-center gap-4 w-full bg-white/90 backdrop-blur-sm p-4 md:p-8  rounded-4xl my-6"
    >
      <div className="flex items-center gap-2 relative">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
          What matters most to your business right now?
        </h2>
      </div>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-800 text-center">
        Your priorities, your playbook. Tell us what moves matter most — and
        we&apos;ll put them at your fingertips.
      </p>

      {/* Priority Form */}
      <form onSubmit={handleSubmit} className="w-full mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            placeholder="Share your business priority..."
            className="flex-1 p-3 text-base sm:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-secondary to-primary transition-colors font-semibold text-base sm:text-lg"
          >
            Add Priority
          </motion.button>
        </div>
      </form>

      {/* Priorities List */}
      <div className="w-full space-y-4">
        <AnimatePresence>
          {priorities
            .sort((a, b) => b.votes - a.votes)
            .map((priority) => (
              <motion.div
                key={priority.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <p className="text-lg sm:text-xl font-medium text-gray-800">
                    {priority.text}
                  </p>
                  <p className="text-sm sm:text-base text-gray-500">
                    {priority.timestamp.toLocaleDateString()}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleVote(priority.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaThumbsUp className="text-blue-500 text-lg" />
                  <span className="font-bold text-base sm:text-lg">
                    {priority.votes}
                  </span>
                </motion.button>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default BusinessPriorities;
