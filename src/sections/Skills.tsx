import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('technical');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'technical', name: 'Technical Skills' },
    { id: 'core', name: 'Core Concepts' },
    { id: 'conceptual', name: 'Conceptual Understanding' },
    { id: 'framework', name: 'Frameworks' },
    { id: 'platform', name: 'Platforms' },
    { id: 'tool', name: 'Tools' },
    { id: 'soft', name: 'Soft Skills' },
    { id: 'language', name: 'Languages Known' },
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-8 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-400 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transform"
            >
              <div className="flex justify-start items-center space-x-2 text-blue-600 dark:text-blue-300 font-semibold text-lg">
                <span>🔹</span> {/* Optional: icon/bullet style */}
                <h3>{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
