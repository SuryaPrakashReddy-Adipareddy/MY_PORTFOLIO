import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';


const certificates: Certificate[] = [
  {
    id: 1,
    title: 'IBM Cognitive Class: Python 101 for Data Science Certification',
    link: 'https://media.licdn.com/dms/image/v2/D5622AQF27VkxlPz1cQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720630456365?e=1749686400&v=beta&t=m8rZSguc-mE-_G-jeEZrz75eB45v6WjqrSHYQzaD4FE',
    description:
 ' Completed Python 101 for Data Science by IBM on Cognitive Class, covering Python basics, data structures, and libraries like Pandas and Numpy Gained hands-on experience in writing Python scripts for data analysis tasks.',
  },
  {
    id: 2,
    title: 'DeepLearning.AI: Build Basic Generative Adversarial Networks (GANs) Certification',
    link: 'https://drive.google.com/file/d/1cZ8UnD2UePBE1VzlhTwtmAz1qsfVyT3o/view?usp=drive_link',
    description:
      'Completed a hands-on course on building and training basic GAN architectures using TensorFlow and Keras  practical experience in generating synthetic data and understanding GAN training dynamics.',
  },
  {
    id: 3,
    title: 'Forage: Data Analytics and Visualization Job Simulation Certificate',
    link: 'https://drive.google.com/file/d/1ffJ8pFPn-O8fD4ktAEYytPqsXGB9cXTd/view?usp=drive_link',
    description:
      'Completed a hands-on job simulation covering data cleaning, modeling, visualization, and client presentation Gained experience in translating data into insights and business-ready storytelling.',
  },
];

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certificates" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Certificates" subtitle="Verified courses and achievements" />
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <Award size={20} className="text-blue-500" />
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                  {cert.title}
                </a>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
