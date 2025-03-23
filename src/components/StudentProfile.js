import React, { useState } from 'react';
import { Star, MapPin, Calendar, Briefcase, Award, CheckCircle, Edit, Clock, FileText, MessageSquare, Download, Share2 } from 'lucide-react';

const StudentProfile = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample student data
  const student = {
    name: 'Aditya Sharma',
    title: 'Full Stack Developer & UI/UX Designer',
    program: 'B.Tech Computer Science, 3rd Year',
    location: 'BITS Pilani, Rajasthan',
    joined: 'August 2023',
    about: 'Passionate developer with strong problem-solving skills. Experienced in web and mobile application development with modern technologies. Looking for challenging projects to enhance my skills while pursuing my degree.',
    skills: [
      { name: 'React.js', level: 'Advanced', endorsed: 15 },
      { name: 'Node.js', level: 'Intermediate', endorsed: 12 },
      { name: 'UI/UX Design', level: 'Advanced', endorsed: 18 },
      { name: 'Python', level: 'Advanced', endorsed: 14 },
      { name: 'MongoDB', level: 'Intermediate', endorsed: 8 },
      { name: 'Express.js', level: 'Intermediate', endorsed: 10 },
      { name: 'Figma', level: 'Advanced', endorsed: 16 },
      { name: 'AWS', level: 'Beginner', endorsed: 5 }
    ],
    education: [
      {
        institution: 'BITS Pilani',
        degree: 'B.Tech in Computer Science',
        period: '2022 - 2026',
        description: 'Currently maintaining a 9.2 CGPA. Active member of the Software Development Club.'
      }
    ],
    projects: [
      {
        title: 'E-commerce Website Redesign',
        client: 'CampusKart Startup',
        date: 'Jan 2025',
        description: 'Redesigned the UI of a campus e-commerce platform, increasing user engagement by 35% and transaction completion rate by 20%.',
        skills: ['React.js', 'Tailwind CSS', 'Figma'],
        rating: 4.9
      },
      {
        title: 'Department Research Dashboard',
        client: 'Prof. Kumar, CS Department',
        date: 'Nov 2024',
        description: 'Created a dashboard to visualize research data and publications from the Computer Science department.',
        skills: ['D3.js', 'Vue.js', 'Python'],
        rating: 4.8
      },
      {
        title: 'Student Club Management System',
        client: 'BITS Student Union',
        date: 'Sep 2024',
        description: 'Developed a system to manage club registrations, events, and member communications.',
        skills: ['Node.js', 'MongoDB', 'React.js'],
        rating: 5.0
      }
    ],
    reviews: [
      {
        name: 'Prateek Agarwal',
        role: 'CampusKart Founder',
        date: 'Jan 2025',
        content: 'Aditya is incredibly talented and professional. He understood our requirements perfectly and delivered the redesign ahead of schedule. The improved UI has significantly increased our user engagement metrics.',
        rating: 5.0
      },
      {
        name: 'Prof. Kumar',
        role: 'Associate Professor, CS Dept',
        date: 'Nov 2024',
        content: 'Excellent work on the research dashboard. Aditya has a strong grasp of data visualization concepts and implemented complex features with minimal guidance.',
        rating: 4.8
      }
    ],
    stats: {
      projectsCompleted: 11,
      onTime: '97%',
      totalEarned: '₹78,500',
      avgRating: 4.9
    },
    availability: {
      status: 'Available',
      hours: '10-15 hrs/week',
      nextAvailable: 'Immediately'
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header - simplified for profile page */}
      <header className="bg-blue-600 text-white shadow-md py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award size={24} />
            <h1 className="text-xl font-bold">SkillHub</h1>
            <span className="text-xs bg-yellow-500 text-blue-900 px-2 py-0.5 rounded-md font-semibold">BITS PILANI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('dashboard')} 
              className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50">
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Left Column - Profile Summary */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="bg-blue-600 h-24 relative">
              <button className="absolute top-2 right-2 p-1.5 bg-white bg-opacity-25 rounded-full hover:bg-opacity-40 transition">
                <Edit size={16} className="text-white" />
              </button>
            </div>
            
            <div className="px-6 pb-6 relative">
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-2xl border-4 border-white absolute -top-10 left-6">
                {student.name.charAt(0)}
              </div>
              
              <div className="pt-12">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">{student.name}</h2>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="font-medium">{student.stats.avgRating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600">{student.title}</p>
                
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <MapPin size={14} className="mr-1" />
                  <span>{student.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar size={14} className="mr-1" />
                  <span>Member since {student.joined}</span>
                </div>
                
                <div className="flex items-center mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle size={12} className="mr-1" />
                    Verified Student
                  </span>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition flex items-center justify-center">
                    <MessageSquare size={14} className="mr-1" />
                    Contact
                  </button>
                  <button className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition">
                    <Download size={14} />
                  </button>
                  <button className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition">
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Availability Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Availability</h3>
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-green-600 font-medium">{student.availability.status}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <Clock size={14} className="mr-2" />
              {student.availability.hours}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar size={14} className="mr-2" />
              <span>Next available: {student.availability.nextAvailable}</span>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <h3 className="font-bold text-gray-800 mb-3">Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Projects</p>
                <p className="font-bold text-gray-800 text-lg">{student.stats.projectsCompleted}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">On-time</p>
                <p className="font-bold text-gray-800 text-lg">{student.stats.onTime}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Earned</p>
                <p className="font-bold text-gray-800 text-lg">{student.stats.totalEarned}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Rating</p>
                <div className="flex items-center">
                  <p className="font-bold text-gray-800 text-lg mr-1">{student.stats.avgRating}</p>
                  <Star size={16} className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Main Profile Content */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="border-b border-gray-100">
              <div className="flex">
                <button
                  className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3">About</h3>
                    <p className="text-gray-600">{student.about}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {student.skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                          <div>
                            <div className="font-medium text-gray-800">{skill.name}</div>
                            <div className="text-xs text-gray-500">{skill.level}</div>
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <CheckCircle size={12} className="text-blue-600 mr-1" />
                            <span>{skill.endorsed} endorsements</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">Education</h3>
                    {student.education.map((edu, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between">
                          <div className="font-medium text-gray-800">{edu.institution}</div>
                          <div className="text-sm text-gray-500">{edu.period}</div>
                        </div>
                        <div className="text-gray-600">{edu.degree}</div>
                        <div className="text-sm text-gray-600 mt-1">{edu.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'projects' && (
                <div>
                  <h3 className="font-bold text-gray-800 mb-4">Completed Projects</h3>
                  {student.projects.map((project, index) => (
                    <div key={index} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-gray-800">{project.title}</h4>
                        <div className="flex items-center">
                          <Star size={14} className="text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{project.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Briefcase size={14} className="mr-1" />
                        <span>{project.client}</span>
                        <span className="mx-2">•</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{project.date}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800">Client Reviews</h3>
                    <div className="flex items-center bg-blue-50 px-3 py-1 rounded-md">
                      <Star size={16} className="text-yellow-500 mr-1" />
                      <span className="font-medium">{student.stats.avgRating}</span>
                      <span className="text-gray-500 text-sm ml-1">({student.reviews.length} reviews)</span>
                    </div>
                  </div>
                  
                  {student.reviews.map((review, index) => (
                    <div key={index} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <div>
                          <div className="font-medium text-gray-800">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.role}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < Math.floor(review.rating) ? "text-yellow-500" : "text-gray-300"}
                                fill={i < Math.floor(review.rating) ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;