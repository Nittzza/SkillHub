import React, { useState, useEffect } from 'react';
import { Award, Heart, X, Star, Briefcase, User, Filter, ChevronRight, ChevronLeft } from 'lucide-react';

const SkillMatching = ({ onNavigate }) => {
  // Sample data - this should align with your existing data structure
  const students = [
    { 
      id: 1, 
      name: 'Nittya', 
      title: 'Full Stack Developer & UI Designer',
      skills: [
        { name: 'React.js', category: 'Frontend Development', level: 4 },
        { name: 'UI/UX Design', category: 'Design', level: 4 },
        { name: 'Node.js', category: 'Backend Development', level: 3 },
        { name: 'MongoDB', category: 'Databases', level: 3 },
        { name: 'Figma', category: 'Design Tools', level: 4 },
        { name: 'TypeScript', category: 'Programming Languages', level: 3 }
      ],
      rating: 4.9
    }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      budget: '₹15,000 - ₹25,000',
      duration: '4 weeks',
      skills: ['React.js', 'Tailwind CSS', 'API Integration', 'UI/UX Design'],
      employer: 'CampusCart Startup',
      deadline: '2 weeks',
      description: 'Looking for a talented frontend developer to redesign our e-commerce platform with improved UI/UX and modern design principles.'
    },
    {
      id: 2,
      title: 'Research Data Visualization Dashboard',
      budget: '₹10,000 - ₹18,000',
      duration: '3 weeks',
      skills: ['Python', 'Data Analysis', 'Dashboard Design'],
      employer: 'Prof. Kumar, Mechanical Engineering Dept',
      deadline: '10 days',
      description: 'Need a data scientist to create interactive visualizations for research data related to material properties.'
    },
    {
      id: 3,
      title: 'Campus Event Mobile App',
      budget: '₹12,000 - ₹20,000',
      duration: '5 weeks',
      skills: ['React Native', 'Firebase', 'UI/UX Design'],
      employer: 'Student Union Council',
      deadline: '3 weeks',
      description: 'We need a mobile app developer to create an app for campus events, which will allow students to browse, register, and receive updates.'
    },
    {
      id: 4,
      title: 'Blockchain-based Certificate Verification',
      budget: '₹18,000 - ₹30,000',
      duration: '6 weeks',
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'],
      employer: 'Blockchain Club',
      deadline: '4 weeks',
      description: 'Develop a blockchain-based system for verifying academic certificates and credentials, preventing fraud and allowing for easy authentication.'
    }
  ];

  // Use current user's skills (first student in array for demo)
  const currentUser = students[0];
  const userSkills = currentUser.skills.map(skill => skill.name);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchedProjects, setMatchedProjects] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showMatched, setShowMatched] = useState(false);
  
  // Reset animation class after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setSwipeDirection(null);
    }, 300);
    return () => clearTimeout(timer);
  }, [swipeDirection]);
  
  // Calculate match score between user skills and project
  const calculateMatchScore = (project) => {
    const projectSkills = project.skills.map(skill => skill.toLowerCase());
    const userSkillsLower = userSkills.map(skill => skill.toLowerCase());
    
    const matchingSkills = projectSkills.filter(skill => 
      userSkillsLower.includes(skill.toLowerCase())
    );
    
    return {
      score: Math.round((matchingSkills.length / projectSkills.length) * 100),
      matchingSkills: matchingSkills
    };
  };
  
  // Handle swipe right (like)
  const handleLike = () => {
    if (currentIndex < projects.length) {
      setMatchedProjects([...matchedProjects, projects[currentIndex]]);
      setSwipeDirection('right');
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 300);
    }
  };
  
  // Handle swipe left (reject)
  const handleReject = () => {
    if (currentIndex < projects.length) {
      setSwipeDirection('left');
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 300);
    }
  };
  
  // Determine animation class based on swipe direction
  const getCardAnimationClass = () => {
    if (swipeDirection === 'right') {
      return 'transition-transform duration-300 translate-x-full rotate-12 opacity-0';
    } else if (swipeDirection === 'left') {
      return 'transition-transform duration-300 -translate-x-full -rotate-12 opacity-0';
    }
    return '';
  };
  
  // Calculate match percentage for the current project
  const currentProject = projects[currentIndex];
  const matchPercentage = currentProject ? calculateMatchScore(currentProject).score : 0;
  
  // Render match quality badge
  const renderMatchBadge = (score) => {
    let color;
    if (score >= 80) color = "bg-green-100 text-green-800";
    else if (score >= 50) color = "bg-yellow-100 text-yellow-800";
    else color = "bg-red-100 text-red-800";
    
    return (
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${color}`}>
        {score}% Match
      </span>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award size={24} />
            <h1 className="text-xl font-bold">SkillHub</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('dashboard')} className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 flex items-center">
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Smart Project Matching</h2>
          <p className="text-gray-600">Find projects that match your skills by swiping right on projects you're interested in, or left to skip.</p>
        </div>
        
        {/* Toggle View */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${!showMatched ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
              onClick={() => setShowMatched(false)}
            >
              Discover Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${showMatched ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
              onClick={() => setShowMatched(true)}
            >
              Your Matches ({matchedProjects.length})
            </button>
          </div>
        </div>
        
        {!showMatched ? (
          <div className="flex flex-col items-center">
            {/* Card Stack */}
            <div className="w-full max-w-lg relative">
              {/* Current Project Card */}
              {currentIndex < projects.length ? (
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${getCardAnimationClass()}`}>
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-24 relative">
                    <div className="absolute top-4 right-4">
                      {renderMatchBadge(matchPercentage)}
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 -mt-6">
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                      <h3 className="text-lg font-bold text-gray-800">{currentProject.title}</h3>
                      <p className="text-sm text-gray-600">{currentProject.employer}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-700">{currentProject.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Budget:</span>
                        <span className="text-gray-600">{currentProject.budget}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Duration:</span>
                        <span className="text-gray-600">{currentProject.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Deadline:</span>
                        <span className="text-gray-600">{currentProject.deadline}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Skill Match:</span>
                        <span className="text-gray-600">{matchPercentage}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs px-2 py-1 rounded-md ${
                              userSkills.includes(skill) 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Match visualization bar */}
                    <div className="mt-6">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            matchPercentage >= 80 ? 'bg-green-500' :
                            matchPercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${matchPercentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No more projects to show</h3>
                  <p className="text-gray-600 mb-4">You've reviewed all available projects.</p>
                  <button 
                    onClick={() => setCurrentIndex(0)} 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Start Over
                  </button>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            {currentIndex < projects.length && (
              <div className="flex space-x-6 mt-6">
                <button 
                  onClick={handleReject}
                  className="w-14 h-14 bg-white text-red-500 rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition"
                >
                  <X size={30} />
                </button>
                <button 
                  onClick={handleLike}
                  className="w-14 h-14 bg-white text-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition"
                >
                  <Heart size={30} />
                </button>
              </div>
            )}
            
            {/* Instruction */}
            <p className="text-sm text-gray-500 mt-6">
              Swipe right or click the heart icon to express interest in a project.
              Swipe left or click the X icon to skip.
            </p>
          </div>
        ) : (
          /* Matched Projects View */
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <Heart size={18} className="text-red-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Your Matched Projects</h3>
            </div>
            
            {matchedProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {matchedProjects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">{project.title}</h4>
                      {renderMatchBadge(calculateMatchScore(project).score)}
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{project.employer}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="text-xs text-gray-500">+{project.skills.length - 3} more</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{project.duration} • {project.deadline} left</span>
                      <button className="text-xs text-blue-600 hover:underline">Apply</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-500">
                <p className="mb-4">You haven't matched with any projects yet.</p>
                <button 
                  onClick={() => setShowMatched(false)} 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Discover Projects
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default SkillMatching;