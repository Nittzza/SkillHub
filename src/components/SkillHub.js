import React, { useState, useEffect } from 'react';
import { Search, Briefcase, User, Bell, MessageSquare, Star, Award, TrendingUp, Calendar, CheckCircle } from 'lucide-react';
import { getSkills, getProjects, getStudents } from '../api'; // Adjust path if needed

const SkillHub = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Replace your hardcoded data with state variables
  const [featuredSkills, setFeaturedSkills] = useState([]);
  const [topProjects, setTopProjects] = useState([]);
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Add this useEffect to fetch data when component mounts
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      
      // Get skills
      const { data: skillsData } = await getSkills();
      if (skillsData) setFeaturedSkills(skillsData);
      
      // Get projects
      const { data: projectsData } = await getProjects();
      if (projectsData) setTopProjects(projectsData);
      
      // Get students
      const { data: studentsData } = await getStudents();
      if (studentsData) setTopStudents(studentsData);
      
      setLoading(false);
    }
    
    fetchData();
  }, []);
  
  // Add a loading indicator
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-blue-600 text-xl">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award size={28} />
            <h1 className="text-xl font-bold">SkillHub</h1>
            <span className="text-xs bg-yellow-500 text-blue-900 px-2 py-1 rounded-md font-semibold">BITS PILANI</span>
          </div>
          
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search skills or projects..."
              className="w-full py-2 px-4 pr-10 rounded-md border-none text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-blue-500 transition">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-500 transition">
              <MessageSquare size={20} />
            </button>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
              A
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6">
            <button
              className={`py-4 px-2 font-medium text-sm transition-colors flex items-center space-x-1 border-b-2 ${activeTab === 'discover' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('discover')}
            >
              <TrendingUp size={16} />
              <span>Discover</span>
            </button>
            <button
              className={`py-4 px-2 font-medium text-sm transition-colors flex items-center space-x-1 border-b-2 ${activeTab === 'projects' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('projects')}
            >
              <Briefcase size={16} />
              <span>Projects</span>
            </button>
            <button
              className={`py-4 px-2 font-medium text-sm transition-colors flex items-center space-x-1 border-b-2 ${activeTab === 'students' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('students')}
            >
              <User  size={16} />
              <span>Students</span>
            </button>
            <button
              className={`py-4 px-2 font-medium text-sm transition-colors flex items-center space-x-1 border-b-2 ${activeTab === 'calendar' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar size={16} />
              <span>Events</span>
            </button>
            <button
              className={`py-4 px-2 font-medium text-sm transition-colors flex items-center space-x-1 border-b-2 ${activeTab === 'analysis' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-500'}`}
              onClick={() => {
                setActiveTab('analysis');
                onNavigate('skill-analysis');
              }}
            >
              <Star size={16} />
              <span>Skill Analysis</span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-6 mb-8 text-white flex items-center justify-between">
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-2">Find Gigs. Showcase Skills. Build Your Future.</h2>
            <p className="text-blue-100 mb-4">Connect with startups and peers at BITS Pilani to take on exciting projects and earn while you learn.</p>
            <div className="flex space-x-4">
              <button 
                onClick={() => onNavigate('profile')} 
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition">
                List Your Skills
              </button>
              <button 
                onClick={() => onNavigate('post-project')} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium border border-blue-200 hover:bg-blue-600 transition">
                Post a Project
              </button>
              <button 
                onClick={() => onNavigate('skill-matching')} 
                className="bg-green-500 text-white px-4 py-2 rounded-md font-medium border border-green-200 hover:bg-green-600 transition">
                Find Matches
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/api/placeholder/300/200" alt="Students collaborating" className="rounded-md" />
          </div>
        </div>
        
        {/* Featured Skills */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Popular Skills on Campus</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {featuredSkills.map(skill => (
              <div key={skill.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition cursor-pointer">
                <h4 className="font-medium text-gray-800">{skill.name}</h4>
                <p className="text-sm text-gray-500">{skill.count} students</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Top Projects */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Hot Projects</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition cursor-pointer">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md">{project.deadline} left</span>
                    <span className="text-xs font-medium text-gray-500">{project.duration}</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mt-2">{project.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">Posted by: {project.employer}</p>
                  <p className="text-sm font-bold text-gray-700">{project.budget}</p>
                </div>
                <div className="px-4 py-3 bg-gray-50 flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-md">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Top Students */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Top Rated Students</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStudents.map(student => (
              <div key={student.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition cursor-pointer flex">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium text-gray-800">{student.name}</h4>
                    <CheckCircle size={14} className="text-green-500 ml-1" />
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{student.program}</p>
                  <div className="flex items-center mb-2">
                    <Star size={14} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{student.rating}</span>
                    <span className="text-xs text-gray-500 ml-2">{student.projects} projects</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {student.skills.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">{skill}</span>
                    ))}
                    {student.skills.length > 2 && (
                      <span className="text-xs text-gray-500">+{student.skills.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Campus Events */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Upcoming Campus Events</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-md p-4 hover:border-blue-300 transition cursor-pointer">
              <p className="text-xs text-blue-600 font-medium">MAR 25, 2025</p>
              <h4 className="font-medium text-gray-800 mb-1">Startup Pitch Competition</h4>
              <p className="text-sm text-gray-600 mb-2">Opportunity to showcase your skills to potential employers.</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>LTC Auditorium</span>
                <span className="mx-2">•</span>
                <span>5:00 PM</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md p-4 hover:border-blue-300 transition cursor-pointer">
              <p className="text-xs text-blue-600 font-medium">MAR 28, 2025</p>
              <h4 className="font-medium text-gray-800 mb-1">Freelancing Workshop</h4>
              <p className="text-sm text-gray-600 mb-2">Learn how to set rates and manage client relationships.</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>FD-II Room 3201</span>
                <span className="mx-2">•</span>
                <span>2:30 PM</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md p-4 hover:border-blue-300 transition cursor-pointer">
              <p className="text-xs text-blue-600 font-medium">APR 2, 2025</p>
              <h4 className="font-medium text-gray-800 mb-1">Hackathon Prep Session</h4>
              <p className="text-sm text-gray-600 mb-2">Get tips on winning hackathons from previous winners.</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>Innovation Hub</span>
                <span className="mx-2">•</span>
                <span>6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Award size={24} />
                <h2 className="text-lg font-bold text-white">SkillHub</h2>
                <span className="text-xs bg-yellow-500 text-blue-900 px-2 py-0.5 rounded-md font-semibold">BITS PILANI</span>
              </div>
              <p className="text-sm mt-2">Connecting talent with opportunity.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-white mb-2">For Students</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="hover:text-white transition">Find Projects</a></li>
                  <li><a href="#" onClick={() => onNavigate('profile')} className="hover:text-white transition">Create Profile</a></li>
                  <li><a href="#" className="hover:text-white transition">Skill Verification</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">For Employers</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#" onClick={() => onNavigate('post-project')} className="hover:text-white transition">Post Projects</a></li>
                  <li><a href="#" className="hover:text-white transition">Find Talent</a></li>
                  <li><a href="#" className="hover:text-white transition">Payment Protection</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Support</h4>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition">Report Issue</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-center">
            <p>&copy; 2025 SkillHub - BITS Pilani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkillHub;