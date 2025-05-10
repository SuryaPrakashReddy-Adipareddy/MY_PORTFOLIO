import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react'; // You can use a different icon if desired
import achievements from '../data/achievements'; // Import achievements data

const Achievements: React.FC = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-8 px-6">
      <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
  Achievements
</h2>
<div className="w-24 h-1 mx-auto mb-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />



        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row gap-6 justify-center items-stretch"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Award size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-500 underline"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Final message below the achievements */}
        <p className="mt-10 text-center text-lg font-medium text-gray-700 dark:text-gray-300">
          Looking forward to more milestones in the future...
        </p>
      </div>
    </section>
  );
};

export default Achievements;
