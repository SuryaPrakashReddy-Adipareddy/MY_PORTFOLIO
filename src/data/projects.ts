import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Image Denoising using GAN",
    description: "A deep learning project that restores and enhances noisy or low-quality images using GFPGAN, a GAN-based architecture designed for high-fidelity facial image reconstruction and denoising.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TgSIt7tpP1j2ELbWTsiXdA.png",
    category: "Computer Vision",
    technologies: ["Python", "OpenCV", "PyTorch", "GFPGAN"],
    github: "https://github.com/SuryaPrakashReddy-Adipareddy/Image-Denoising-using-GAN.git",
    
  },
  {
    id: 2,
    title: "SympTrack – Smart Disease Predictor Using Patient Symptoms",
    description: "A Python-based GUI application that predicts diseases based on patient symptoms using machine learning models like Decision Tree, Random Forest, Naive Bayes, and K-Nearest Neighbors. Built with Tkinter, the system delivers quick, multi-model predictions through an intuitive interface for enhanced medical support.",
    image: "https://www.saxinstitute.org.au/wp-content/uploads/AI-and-health_iStock-1300745916.jpg",
    category: "GUI",
    technologies: ["python", "Machine Learning", "Tkinter"],
    github: "https://github.com/SuryaPrakashReddy-Adipareddy/SMART_HEALTH_CARE__DIAGNOSIS.git"
  },
  {
    id: 3,
    title: "FloodGuard: Identifying and Defending Against SYN and UDP DDoS Attacks",
    description: "FloodGuard is a robust system designed to identify and defend against Distributed Denial of Service (DDoS) attacks, specifically focusing on SYN and UDP flooding attacks. This project leverages Long Short-Term Memory (LSTM) models, a type of Recurrent Neural Network (RNN), to effectively classify and detect these types of network-based attacks.",
    image: "https://www.cdnetworks.com/wp-content/uploads/2023/03/Types-of-DDoS-Attacks.jpg",
    category: "Web App",
    technologies: ["React", "TypeScript", "Python", "TensorFlow"],
    github: "https://github.com/SuryaPrakashReddy-Adipareddy/-FloodGuard-Identifying-and-Defending-Against-SYN-and-UDP-DDoS-Attacks-.git",
    link: "https://gleeful-zuccutto-9eb263.netlify.app/ "
  },
  {
    id: 4,
    title: "SUB CONVOLUTIONAL VASNet BASED SPEECH ENHANCEMENT",
    description: "Developed an audio enhancement tool in Python leveraging Librosa, Noisereduce, and SoundFile, integrated with a VASNet-based model to intelligently distinguish and enhance speech segments. The system applies adaptive spectral noise reduction while preserving vocal clarity, resulting in cleaner and more professional audio output.",
    image: "https://images.wondershare.com/ailab/image2023/products-7/remove-noise-banner.png",
    category: "Audio Signal Processing Tool",
    technologies: ["Python", "VASNet tools", "DeepLearning"],
    github: "https://github.com/SuryaPrakashReddy-Adipareddy/SUB-CONVOLUTIONAL-VASNet-BASED-SPEECH-ENHANCEMENT.git"
  },
  {
    id: 5,
    title: "Clinical Trial Churn Prediction and Recommendation System",
    description: "This web-based application predicts patient churn in clinical trials based on patient information and provides recommendations to improve retention. It leverages machine learning models trained on real-world data to help clinical researchers proactively manage participant dropout risk.",
    image: "https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2023/03/shutterstock_2041783049.jpg",
    category: "Web App",
    technologies: ["HTML","CSS","Java Script","BootStrap","Python(Flask)"],
    github: "https://github.com/SuryaPrakashReddy-Adipareddy/Clinical_Trail_Churn_Prediction.git",
    
  },
  
];