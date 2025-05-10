import React from 'react';

type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string[];
  proofLink: string;
};

const experiences: ExperienceItem[] = [
  {
    title: 'Data Science Intern',
    company: 'Innovate Intern',
    duration: 'May 27, 2024 – July 22, 2024',
    description: [
      '➤ Worked on real-time data analytics and machine learning tasks.',
      '➤ Built model for color detection using Python.',
      '➤ Visualized data with Pandas, Scikit-learn, and Matplotlib.'
    ],
    proofLink: 'https://drive.google.com/file/d/1PsuznOUsIayKWWyL-pM6Z2pVKrbY6zPb/view?usp=drive_link',
  },
  {
    title: 'Data Science Intern',
    company: 'Bharat Intern',
    duration: 'June 10, 2024 – July 10, 2024',
    description: [
      '➤ Completed stock price prediction and recommendation projects.',
      '➤ Focused on supervised learning techniques.',
      '➤ Conducted exploratory data analysis.'
    ],
    proofLink: 'https://drive.google.com/file/d/1t2a3UedgiUMCrgSGUeKTfrhv9TGHax4t/view?usp=drive_link',
  },
  {
    title: 'Data Science Intern',
    company: 'Prodigy InfoTech',
    duration: 'July 1, 2024 – July 31, 2024',
    description: [
      '➤ Implemented machine learning workflows.',
      '➤ Built Jupyter Notebook-based solutions.',
      '➤ Delivered CNN-based image classification and data cleaning pipelines.'
    ],
    proofLink: 'https://drive.google.com/file/d/1nGVaWSrxXR_q-Mxwp5Hns8VL8GsPhA-b/view?usp=drive_link',
  },
  {
    title: "Student Coordinator – OWASP Club",
    company: "KARE (Kalasalingam Academy of Research and Education)",
    duration: "July 2024 - May 2025",
    description: [
      '➤ Mentored student teams in cybersecurity event planning.',
      '➤ Organized workshops and webinars.',
      '➤ Raised awareness on digital security practices.'
    ],
    proofLink: "https://drive.google.com/file/d/1ZeD5I-Flkie1kRM40o5qpX4osTGKT4ul/view?usp=drive_link"
  },
  {
    title: "Student Advisor – SCRS Club",
    company: "KARE (Kalasalingam Academy of Research and Education)",
    duration: "July 2024 - May 2025",
    description: [
      '➤ Led external outreach and engagement.',
      '➤ Promoted student participation.',
      '➤ Advised on club strategy and communications.'
    ],
    proofLink: "https://drive.google.com/file/d/1VI_jpHQy0uA3B_94nNZuu8Axvf17zs4g/view?usp=drive_link"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-8 px-6 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
        <div className="w-32 h-1 mx-auto mb-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} | {exp.duration}</p>
              <ul className="mt-3 space-y-1 text-gray-800 dark:text-gray-200 list-none">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={exp.proofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
