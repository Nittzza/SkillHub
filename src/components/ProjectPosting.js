import React, { useState } from 'react';
import { Award, Info, X, Plus, Calendar, Clock, Tag, DollarSign, ArrowLeft } from 'lucide-react';

const ProjectPosting = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: '',
    deadline: '',
    duration: '',
    skills: []
  });
  
  const [currentSkill, setCurrentSkill] = useState('');
  
  const categories = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Content Writing',
    'Data Analysis',
    'Graphic Design',
    'Video Editing',
    'Marketing',
    'Research Assistance',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const addSkill = () => {
    if (currentSkill.trim() !== '' && !formData.skills.includes(currentSkill.trim())) {
      setFormData({ ...formData, skills: [...formData.skills, currentSkill.trim()] });
      setCurrentSkill('');
    }
  };
  
  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(s => s !== skill)
    });
  };
  
  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Project posted successfully!');
    // Reset form or redirect
    onNavigate('dashboard');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
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
              className="px-3 py-1 text-sm bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 flex items-center">
              <ArrowLeft size={14} className="mr-1" />
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Post a New Project</h2>
            <p className="text-gray-600">Fill in the details below to find the perfect student for your project.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <form onSubmit={handleSubmit}>
              {/* Project Title */}
              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="E.g., Frontend Developer for E-commerce Website"
                  required
                />
              </div>
              
              {/* Project Description */}
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your project, requirements, and expectations in detail..."
                  required
                ></textarea>
              </div>
              
              {/* Project Category */}
              <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  required
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Two Columns Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budget (₹)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="E.g., 5000-10000"
                      required
                    />
                  </div>
                </div>
                
                {/* Deadline */}
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                    Deadline
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Project Duration */}
              <div className="mb-6">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Duration
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="E.g., 2 weeks, 1 month"
                    required
                  />
                </div>
              </div>
              
              {/* Required Skills */}
              <div className="mb-6">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                  Required Skills
                </label>
                <div className="flex mb-2">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Tag size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="skills"
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      onKeyDown={handleSkillKeyDown}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="E.g., React.js, Python, Figma"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-md">
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Information Box */}
              <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6 flex items-start">
                <Info size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-blue-800 mb-1">Tips for getting quality responses:</h4>
                  <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
                    <li>Be specific about your requirements and expectations</li>
                    <li>Provide clear details about the project scope and deliverables</li>
                    <li>Set a realistic budget range based on the complexity of the task</li>
                    <li>Mention any specific qualifications or experience required</li>
                  </ul>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Post Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>&copy; 2025 SkillHub - BITS Pilani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPosting;