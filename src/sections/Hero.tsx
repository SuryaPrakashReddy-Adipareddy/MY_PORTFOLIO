import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [text] = useTypewriter({
    words: [
      'AI & ML Enthusiast',
      'Data Science Explorer', // updated phrase
      'Real-Time Problem Solver',
      'Full Stack Intelligence Developer',
    ],
    loop: 0,
    delaySpeed: 2000,
    deleteSpeed: 30,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 pt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Text Section */}
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-block text-blue-600 dark:text-blue-400 font-medium text-base mb-3"
            >
              Hello, I'm
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 whitespace-nowrap"
            >
              Adipareddy Surya Prakash Reddy
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6 h-10"
            >
              {text}
              <span className="text-blue-600 dark:text-blue-400">|</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
            >
              Aspiring tech enthusiast currently in B.Tech final-year with a strong passion for exploring the dynamic fields of AI/ML, data science, and web development. 
              I aim to leverage these technologies to create innovative, user-centric solutions that address real-world challenges. With a focus on continuous learning and hands-on projects, 
              I’m eager to contribute to the tech landscape and make a meaningful impact.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-md font-medium transition-all duration-300 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Image Section — top-right, moved slightly down, and size increased vertically */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-end items-start mt-[-10px]" // previously -40px, now closer to text
          >
            <div className="w-80 h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGoJBMXxe2byQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724315734219?e=1752105600&v=beta&t=ZtMtRMpjpcJ5ZFojmNautPINayxN048G4n3cewB4tnI"
                alt="Adipareddy Surya Prakash Reddy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Scroll Down</span>
        <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;

