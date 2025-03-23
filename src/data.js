// Students dataset
const students = [
    { 
      id: 1, 
      name: 'Nittya', 
      title: 'Full Stack Developer & UI Designer',
      program: 'B.Tech Computer Science, 3rd Year',
      location: 'Hyderabad Campus',
      joined: 'August 2023',
      about: 'Creative developer with a passion for building intuitive user interfaces and seamless experiences. Skilled in both frontend and backend technologies with a strong eye for design.',
      skills: [
        { name: 'React.js', category: 'Frontend Development', level: 4, endorsed: 21 },
        { name: 'UI/UX Design', category: 'Design', level: 4, endorsed: 18 },
        { name: 'Node.js', category: 'Backend Development', level: 3, endorsed: 15 },
        { name: 'MongoDB', category: 'Databases', level: 3, endorsed: 12 },
        { name: 'Figma', category: 'Design Tools', level: 4, endorsed: 19 },
        { name: 'TypeScript', category: 'Programming Languages', level: 3, endorsed: 14 }
      ],
      projects: 16,
      rating: 4.9
    },
    { 
      id: 2, 
      name: 'Mukund', 
      title: 'Machine Learning Engineer',
      program: 'M.Tech Data Science, 2nd Year',
      location: 'Pilani Campus',
      joined: 'July 2023',
      about: 'Machine learning enthusiast focused on developing AI solutions for real-world problems. Experienced in predictive modeling, natural language processing, and computer vision applications.',
      skills: [
        { name: 'Python', category: 'Programming Languages', level: 4, endorsed: 20 },
        { name: 'TensorFlow', category: 'AI & ML', level: 4, endorsed: 17 },
        { name: 'Data Analysis', category: 'Analytics', level: 3, endorsed: 15 },
        { name: 'Computer Vision', category: 'AI & ML', level: 3, endorsed: 14 },
        { name: 'NLP', category: 'AI & ML', level: 3, endorsed: 13 },
        { name: 'SQL', category: 'Databases', level: 3, endorsed: 11 }
      ],
      projects: 12,
      rating: 4.8
    },
    { 
      id: 3, 
      name: 'Anand', 
      title: 'Blockchain Developer',
      program: 'B.Tech Computer Science, 4th Year',
      location: 'Goa Campus',
      joined: 'October 2022',
      about: 'Blockchain enthusiast specializing in decentralized applications and smart contract development. Passionate about creating secure and transparent systems using cutting-edge technology.',
      skills: [
        { name: 'Solidity', category: 'Blockchain', level: 4, endorsed: 16 },
        { name: 'Ethereum', category: 'Blockchain', level: 4, endorsed: 15 },
        { name: 'Smart Contracts', category: 'Blockchain', level: 4, endorsed: 14 },
        { name: 'JavaScript', category: 'Programming Languages', level: 3, endorsed: 13 },
        { name: 'Web3.js', category: 'Blockchain', level: 3, endorsed: 12 },
        { name: 'DeFi', category: 'Blockchain', level: 3, endorsed: 10 }
      ],
      projects: 11,
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Neha Sharma', 
      title: 'UI/UX Designer',
      program: 'B.Des Communication Design, 4th Year',
      location: 'Goa Campus',
      joined: 'January 2022',
      about: 'Creative designer with a keen eye for aesthetics and user experience. Specialized in creating intuitive interfaces for mobile and web applications. Looking to collaborate on innovative projects.',
      skills: [
        { name: 'Figma', category: 'Design Tools', level: 4, endorsed: 22 },
        { name: 'UI Design', category: 'User Interface Design', level: 4, endorsed: 19 },
        { name: 'UX Research', category: 'User Experience', level: 3, endorsed: 14 },
        { name: 'Adobe XD', category: 'Design Tools', level: 3, endorsed: 12 },
        { name: 'Wireframing', category: 'UX Design', level: 4, endorsed: 16 },
        { name: 'Prototyping', category: 'UX Design', level: 3, endorsed: 11 }
      ],
      projects: 16,
      rating: 4.9
    },
    { 
      id: 5, 
      name: 'Rahul Verma', 
      title: 'Data Scientist',
      program: 'M.Tech Data Science, 2nd Year',
      location: 'Pilani Campus',
      joined: 'August 2023',
      about: 'Data enthusiast with strong analytical skills. Experienced in statistical analysis, machine learning, and data visualization. Seeking opportunities to apply my technical skills to solve real-world problems.',
      skills: [
        { name: 'Python', category: 'Programming Languages', level: 4, endorsed: 17 },
        { name: 'Machine Learning', category: 'AI & ML', level: 3, endorsed: 14 },
        { name: 'SQL', category: 'Databases', level: 3, endorsed: 12 },
        { name: 'Data Visualization', category: 'Analytics', level: 4, endorsed: 15 },
        { name: 'TensorFlow', category: 'AI & ML', level: 3, endorsed: 10 },
        { name: 'Pandas', category: 'Data Analysis', level: 4, endorsed: 16 }
      ],
      projects: 11,
      rating: 4.7
    }
  ];
  
  // Projects dataset
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      budget: '₹15,000 - ₹25,000',
      duration: '4 weeks',
      skills: ['React.js', 'Tailwind CSS', 'API Integration', 'Payment Gateway'],
      employer: 'CampusCart Startup',
      deadline: '2 weeks',
      description: 'Looking for a talented frontend developer to redesign our e-commerce platform with improved UI/UX and modern design principles. The platform serves campus students for buying and selling used goods.',
      requiredSkills: [
        { name: 'React.js', category: 'Frontend Development', level: 3 },
        { name: 'UI/UX Design', category: 'Design', level: 3 },
        { name: 'Tailwind CSS', category: 'Frontend Development', level: 3 },
        { name: 'API Integration', category: 'Backend Integration', level: 2 },
        { name: 'Payment Gateway', category: 'E-commerce', level: 2 }
      ]
    },
    {
      id: 2,
      title: 'Research Data Visualization Dashboard',
      budget: '₹10,000 - ₹18,000',
      duration: '3 weeks',
      skills: ['Python', 'D3.js', 'Data Analysis', 'Dashboard Design'],
      employer: 'Prof. Kumar, Mechanical Engineering Dept',
      deadline: '10 days',
      description: 'Need a data scientist to create interactive visualizations for research data related to material properties. The dashboard will be used by faculty and students for educational purposes.',
      requiredSkills: [
        { name: 'Python', category: 'Programming Languages', level: 3 },
        { name: 'D3.js', category: 'Data Visualization', level: 3 },
        { name: 'Data Analysis', category: 'Analytics', level: 3 },
        { name: 'Dashboard Design', category: 'UI Development', level: 2 },
        { name: 'R', category: 'Programming Languages', level: 2 }
      ]
    },
    {
      id: 3,
      title: 'Campus Event Mobile App',
      budget: '₹12,000 - ₹20,000',
      duration: '5 weeks',
      skills: ['Flutter', 'Firebase', 'UI/UX for Mobile', 'Push Notifications'],
      employer: 'Student Union Council',
      deadline: '3 weeks',
      description: 'We need a mobile app developer to create an app for campus events, which will allow students to browse, register, and receive updates about various cultural and technical events on campus.',
      requiredSkills: [
        { name: 'Flutter', category: 'Mobile Development', level: 3 },
        { name: 'Firebase', category: 'Backend Services', level: 3 },
        { name: 'UI/UX for Mobile', category: 'Design', level: 3 },
        { name: 'Push Notifications', category: 'Mobile Development', level: 2 },
        { name: 'Authentication', category: 'Security', level: 2 }
      ]
    },
    {
      id: 4,
      title: 'Blockchain-based Certificate Verification',
      budget: '₹18,000 - ₹30,000',
      duration: '6 weeks',
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'],
      employer: 'Blockchain Club',
      deadline: '4 weeks',
      description: 'Develop a blockchain-based system for verifying academic certificates and credentials, preventing fraud and allowing for easy authentication of student achievements.',
      requiredSkills: [
        { name: 'Solidity', category: 'Blockchain', level: 3 },
        { name: 'Ethereum', category: 'Blockchain', level: 3 },
        { name: 'Smart Contracts', category: 'Blockchain', level: 3 },
        { name: 'Web3.js', category: 'Blockchain', level: 2 },
        { name: 'Frontend Development', category: 'Web Development', level: 2 }
      ]
    },
    {
      id: 5,
      title: 'Content Creation for Department Blog',
      budget: '₹5,000 - ₹8,000',
      duration: '2 weeks',
      skills: ['Content Writing', 'SEO', 'Research', 'Editing'],
      employer: 'Computer Science Department',
      deadline: '1 week',
      description: 'Looking for a content writer to create informative and engaging articles about recent technological advancements for our department blog. The content should be accessible to both technical and non-technical readers.',
      requiredSkills: [
        { name: 'Content Writing', category: 'Writing', level: 3 },
        { name: 'SEO', category: 'Digital Marketing', level: 2 },
        { name: 'Research', category: 'Content Creation', level: 3 },
        { name: 'Editing', category: 'Writing', level: 2 },
        { name: 'Technical Knowledge', category: 'Computer Science', level: 2 }
      ]
    }
  ];
  
  // Skills popularity data
  const popularSkills = [
    { id: 1, name: 'Web Development', count: 126 },
    { id: 2, name: 'UI/UX Design', count: 98 },
    { id: 3, name: 'Data Analysis', count: 87 },
    { id: 4, name: 'Content Writing', count: 65 },
    { id: 5, name: 'Mobile Development', count: 54 },
    { id: 6, name: 'Machine Learning', count: 48 },
    { id: 7, name: 'Blockchain', count: 32 },
    { id: 8, name: 'Video Editing', count: 29 }
  ];
  
  // Campus events data
  const campusEvents = [
    {
      id: 1,
      title: 'Hackathon 2025',
      date: 'APR 15, 2025',
      description: 'Annual 36-hour coding competition with prizes worth ₹1 lakh.',
      location: 'Innovation Hub',
      time: '9:00 AM'
    },
    {
      id: 2,
      title: 'Freelancing Workshop',
      date: 'APR 5, 2025',
      description: 'Learn how to build a successful freelancing career while studying.',
      location: 'Lecture Hall 3',
      time: '2:30 PM'
    },
    {
      id: 3,
      title: 'Startup Pitch Day',
      date: 'MAR 28, 2025',
      description: 'Showcase your startup idea to potential investors and mentors.',
      location: 'Auditorium',
      time: '5:00 PM'
    }
  ];
  