import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { MapPin, Calendar, Bookmark, Award } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-8 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle title="About Me" subtitle="Know More About Me" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* IMAGE SECTION */}
          <motion.div
            variants={itemVariants}
            className="flex justify-start items-center -mt-32 h-full pl-6"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden w-full max-w-[480px] h-[550px]">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQFhtWovfbFalQ/feedshare-shrink_1280/B56Za4FvHoHgAk-/0/1746845236294?e=1749686400&v=beta&t=xeqUlgjGufte5oqAhoIMIicmTu5Py-VC0iR4d7aogR4"
                alt="About Me"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* TEXT SECTION */}
          <div className="text-center lg:text-left">
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-2">
              Tech Explorer | Learner | Developer
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-4">
              Hi, I'm Adipareddy Surya Prakash Reddy, an enthusiastic undergraduate currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Data Science. With a strong academic foundation and a CGPA of 9.06, I’m committed to not just learning but applying technology to create meaningful solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-4">
              I'm deeply passionate about Artificial Intelligence, Machine Learning, Deep Learning, Web Development, and solving real-world problems through data-driven insights. My interest lies in building intelligent systems that can predict, analyze, and automate decisions — whether it's through smart web interfaces or robust backend algorithms.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-6">
              I have completed a Data Science internship at Innovate Intern, where I gained hands-on experience in real-world datasets, model training, and predictive analytics. This practical exposure enhanced my problem-solving abilities and strengthened my confidence in working with real-time machine learning pipelines.
            </motion.p>

            {/* ORDERED INFO CARDS */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nellore, Andhra Pradesh, India</p>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-500">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    B.Tech in Computer Science and Engineering (Data Science)
                  </p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-500">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data Science Intern at Innovate Intern (2 months)
                  </p>
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-500">
                  <Bookmark size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Projects</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    6+ Academic & Personal Projects in AI, ML, and Web Development
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* "Let's Talk" BUTTON */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
