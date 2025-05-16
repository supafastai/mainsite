import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaThumbsUp, FaLightbulb } from "react-icons/fa";

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
      className="flex flex-col gap-4 w-full bg-white/90 backdrop-blur-sm p-4 md:p-8 items-start justify-between rounded-4xl my-6"
    >
      <div className="flex items-center gap-2 relative">
        <FaLightbulb className="stroke-secondary text-2xl" />
        <h2 className="text-3xl font-bold">
          What matters most to your business right now?
        </h2>
        <div className="absolute -bottom-2 left-0 w-[30%] h-[2px] bg-red-500"></div>
      </div>
      <p className="text-gray-800">
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
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
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
                  <p className="text-gray-800 font-medium">{priority.text}</p>
                  <p className="text-sm text-gray-500">
                    {priority.timestamp.toLocaleDateString()}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleVote(priority.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaThumbsUp className="text-blue-500" />
                  <span className="font-medium">{priority.votes}</span>
                </motion.button>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default BusinessPriorities;
