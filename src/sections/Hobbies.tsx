// src/sections/Hobbies.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Sparkles } from 'lucide-react'; // You can use any other icon if preferred
import hobbies from '../data/hobbies';  // Default import for hobbies
import { Hobby } from '../types'; // Import Hobby type

const Hobbies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="hobbies" className="py-10 px-4 sm:px-10 bg-white dark:bg-black text-gray-800 dark:text-white">
      <SectionTitle title="Beyond Tech: Hobbies & Interests" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6"
      >
        {hobbies.map((hobby: Hobby, index: number) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-blue-500" size={20} />
              <h3 className="text-lg font-semibold">{hobby.title}</h3>
            </div>
            <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{hobby.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hobbies;
