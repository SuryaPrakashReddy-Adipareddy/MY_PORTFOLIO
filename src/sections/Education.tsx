import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/education';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
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
    <section id="education" className="py-8 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          title="Education"
          subtitle="My academic background "
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px h-full bg-gray-200 dark:bg-gray-700 transform md:translate-x-[-0.5px]" />

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-6 mb-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-[-14px] md:translate-x-[-14px] z-10">
                <GraduationCap size={16} className="text-white" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 md:pr-12 md:pl-0 pl-10">
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.institution}</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {item.degree} in {item.field}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {item.description}
                  </p>
                  {/* Highlighted CGPA/Percentage */}
                  {item.extraInfo && (
                    <p className="inline-block mt-2 text-sm font-medium bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full">
                      {item.degree.includes('Bachelor') || item.degree.includes('B.Tech')
                        ? '🎓  ' + item.extraInfo
                        : '📊 ' + item.extraInfo}
                    </p>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
