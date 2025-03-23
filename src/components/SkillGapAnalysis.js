import React, { useState, useEffect } from 'react';
import { Award, ArrowLeft, AlertCircle, Book, CheckCircle, HelpCircle } from 'lucide-react';

const SkillGapAnalysis = ({ onNavigate }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [matchPercentage, setMatchPercentage] = useState(0);
  const [matchingSkills, setMatchingSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [additionalSkills, setAdditionalSkills] = useState([]);
  
  // Sample data
  const students = [
    { 
      id: 1, 
      name: 'Narayana Aaditya', 
      title: 'Software Engineer',
      skills: [
        { name: 'API Development', category: 'Software Development', level: 3 },
        { name: 'Performance Optimization', category: 'Software Development', level: 3 },
        { name: 'Dashboard Design', category: 'UI Development', level: 3 },
        { name: 'Notification Systems', category: 'Software Development', level: 3 },
        { name: 'UPI Technologies', category: 'FinTech', level: 3 },
        { name: 'Java', category: 'Programming Languages', level: 3 }
      ]
    },
    { 
      id: 2, 
      name: 'Priya Mehta', 
      title: 'UI/UX Designer',
      skills: [
        { name: 'UX Design', category: 'User Experience Design', level: 4 },
        { name: 'Mobile UI Design', category: 'User Interface Design', level: 4 },
        { name: 'User Research', category: 'User Experience Design', level: 3 },
        { name: 'Prototyping', category: 'User Experience Design', level: 4 },
        { name: 'Interaction Design', category: 'User Experience Design', level: 4 },
        { name: 'Figma', category: 'Design Tools', level: 4 }
      ]
    },
    { 
      id: 3, 
      name: 'Rohan Gupta', 
      title: 'Full Stack Developer',
      skills: [
        { name: 'React.js', category: 'Frontend Development', level: 4 },
        { name: 'Node.js', category: 'Backend Development', level: 3 },
        { name: 'MongoDB', category: 'Databases', level: 3 },
        { name: 'API Development', category: 'Software Development', level: 3 },
        { name: 'TypeScript', category: 'Programming Languages', level: 3 },
        { name: 'GraphQL', category: 'API Technologies', level: 2 }
      ]
    }
  ];
  
  const projects = [
    {
      id: 1,
      name: 'UPI Mobile App Redesign',
      description: 'Redesign the UPI mobile application with improved user experience and modern UI',
      requiredSkills: [
        { name: 'UX Design', category: 'User Experience Design', level: 4 },
        { name: 'Mobile UI Design', category: 'User Interface Design', level: 4 },
        { name: 'User Research', category: 'User Experience Design', level: 3 },
        { name: 'Interaction Design', category: 'User Experience Design', level: 4 },
        { name: 'Prototyping', category: 'User Experience Design', level: 3 },
        { name: 'Figma', category: 'Design Tools', level: 3 }
      ]
    },
    {
      id: 2,
      name: 'Student Marketplace Backend',
      description: 'Develop the backend API and database for a student skill marketplace platform',
      requiredSkills: [
        { name: 'Node.js', category: 'Backend Development', level: 4 },
        { name: 'API Development', category: 'Software Development', level: 4 },
        { name: 'MongoDB', category: 'Databases', level: 3 },
        { name: 'Authentication Systems', category: 'Security', level: 3 },
        { name: 'Performance Optimization', category: 'Software Development', level: 3 },
        { name: 'Unit Testing', category: 'Quality Assurance', level: 3 }
      ]
    },
    {
      id: 3,
      name: 'College Event Management System',
      description: 'Create a system to manage college events, registrations, and attendance',
      requiredSkills: [
        { name: 'React.js', category: 'Frontend Development', level: 3 },
        { name: 'API Development', category: 'Software Development', level: 3 },
        { name: 'Database Design', category: 'Databases', level: 3 },
        { name: 'UI Design', category: 'User Interface Design', level: 3 },
        { name: 'Authentication Systems', category: 'Security', level: 2 },
        { name: 'Dashboard Design', category: 'UI Development', level: 3 }
      ]
    }
  ];
  
  useEffect(() => {
    if (selectedStudent && selectedProject) {
      analyzeSkillGap();
    }
  }, [selectedStudent, selectedProject]);
  
  const analyzeSkillGap = () => {
    const student = students.find(s => s.name === selectedStudent);
    const project = projects.find(p => p.name === selectedProject);
    
    if (!student || !project) return;
    
    const studentSkillNames = student.skills.map(skill => skill.name);
    const projectSkillNames = project.requiredSkills.map(skill => skill.name);
    
    // Find matching skills
    const matching = project.requiredSkills.filter(reqSkill => 
      student.skills.some(stuSkill => 
        stuSkill.name === reqSkill.name && stuSkill.level >= reqSkill.level
      )
    );
    
    // Find missing skills
    const missing = project.requiredSkills.filter(reqSkill => 
      !student.skills.some(stuSkill => 
        stuSkill.name === reqSkill.name && stuSkill.level >= reqSkill.level
      )
    );
    
    // Find additional skills the student has
    const additional = student.skills.filter(stuSkill => 
      !project.requiredSkills.some(reqSkill => reqSkill.name === stuSkill.name)
    );
    
    const matchPercent = Math.round((matching.length / project.requiredSkills.length) * 100);
    
    setMatchPercentage(matchPercent);
    setMatchingSkills(matching);
    setMissingSkills(missing);
    setAdditionalSkills(additional);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pb-6">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md py-3 px-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award size={24} />
            <h1 className="text-xl font-bold">SkillHub</h1>
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
      
      <main className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Skill Gap Analysis</h2>
          <p className="text-gray-600">Compare student skills with project requirements to identify matches and gaps.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Student Selection */}
          <div>
            <label htmlFor="student-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select Student
            </label>
            <select
              id="student-select"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">Select a student</option>
              {students.map(student => (
                <option key={student.id} value={student.name}>
                  {student.name} - {student.title}
                </option>
              ))}
            </select>
          </div>
          
          {/* Project Selection */}
          <div>
            <label htmlFor="project-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select Project
            </label>
            <select
              id="project-select"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">Select a project</option>
              {projects.map(project => (
                <option key={project.id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {(selectedStudent && selectedProject) && (
          <>
            {/* Skill Match Percentage */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Skill Match Percentage</h3>
              <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                  className={`absolute left-0 top-0 h-full ${
                    matchPercentage < 33 ? 'bg-red-500' : 
                    matchPercentage < 66 ? 'bg-yellow-500' : 
                    'bg-green-500'
                  }`}
                  style={{ width: `${matchPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  {matchPercentage < 33 
                    ? 'Significant skill gaps exist. Consider additional training or team support.' 
                    : matchPercentage < 66 
                    ? 'Some skill gaps exist. Additional training may be beneficial.' 
                    : 'Good skill match. Minor training or mentorship may help with remaining gaps.'}
                </p>
                <p className="text-xl font-bold text-gray-800">{matchPercentage}%</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Skill Overlap Visualization */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Skill Overlap Visualization</h3>
                <div className="flex justify-center items-center mb-4 relative h-64">
                  {/* Simple Venn diagram visualization */}
                  <div className="absolute w-40 h-40 rounded-full bg-blue-200 opacity-80 left-1/4 transform -translate-x-1/4 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-blue-800">Student</p>
                      <p className="text-sm text-blue-600">({students.find(s => s.name === selectedStudent)?.skills.length || 0})</p>
                    </div>
                  </div>
                  <div className="absolute w-40 h-40 rounded-full bg-yellow-200 opacity-80 right-1/4 transform translate-x-1/4 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-yellow-800">Project</p>
                      <p className="text-sm text-yellow-600">({projects.find(p => p.name === selectedProject)?.requiredSkills.length || 0})</p>
                    </div>
                  </div>
                  <div className="absolute text-center">
                    <p className="font-bold text-green-800">Match: {matchPercentage}%</p>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-1"></div>
                    <span>Student Skills: {students.find(s => s.name === selectedStudent)?.skills.length || 0}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                    <span>Project Requirements: {projects.find(p => p.name === selectedProject)?.requiredSkills.length || 0}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                    <span>Matching: {matchingSkills.length}</span>
                  </div>
                </div>
              </div>
              
              {/* Skill Level Comparison */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Skill Level Comparison</h3>
                
                {missingSkills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-red-600 font-medium mb-2">Missing Skills</h4>
                    {missingSkills.map((skill, index) => (
                      <div key={index} className="mb-3 last:mb-0">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">{skill.name}</p>
                            <p className="text-xs text-gray-500">{skill.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Required Level: {skill.level}</p>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-gray-200 mt-1 rounded-full">
                          <div className="h-full bg-red-500 rounded-full" style={{ width: `${skill.level * 25}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {matchingSkills.length > 0 && (
                  <div>
                    <h4 className="text-green-600 font-medium mb-2">Matching Skills</h4>
                    {matchingSkills.map((skill, index) => (
                      <div key={index} className="mb-3 last:mb-0">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-800">{skill.name}</p>
                            <p className="text-xs text-gray-500">{skill.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Required Level: {skill.level}</p>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-gray-200 mt-1 rounded-full">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: `${skill.level * 25}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Additional Skills */}
            {additionalSkills.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Additional Student Skills</h3>
                <p className="text-gray-600 text-sm mb-4">These are skills the student has that aren't required for the project, but may be valuable:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {additionalSkills.map((skill, index) => (
                    <div key={index} className="bg-blue-50 rounded-md p-4">
                      <h4 className="font-medium text-blue-800 mb-1">{skill.name}</h4>
                      <p className="text-xs text-blue-600 mb-2">{skill.category}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Level: {skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Recommendations</h3>
              
              {missingSkills.length > 0 && (
                <div className="bg-red-50 border border-red-100 rounded-md p-4 mb-4">
                  <h4 className="text-red-800 font-medium mb-2 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    Training Needed
                  </h4>
                  <p className="text-red-700 mb-2">Consider training for the missing skills:</p>
                  <ul className="list-disc pl-5 text-red-700 space-y-1">
                    {missingSkills.slice(0, 3).map((skill, index) => (
                      <li key={index}>{skill.name} (Level {skill.level})</li>
                    ))}
                    {missingSkills.length > 3 && (
                      <li>...and {missingSkills.length - 3} more skills</li>
                    )}
                  </ul>
                </div>
              )}
              
              {additionalSkills.length > 0 && (
                <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                  <h4 className="text-blue-800 font-medium mb-2 flex items-center">
                    <Book size={16} className="mr-1" />
                    Leverageable Skills
                  </h4>
                  <p className="text-blue-700 mb-2">These additional skills could provide unique value:</p>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    {additionalSkills.slice(0, 3).map((skill, index) => (
                      <li key={index}>{skill.name} (Level {skill.level})</li>
                    ))}
                    {additionalSkills.length > 3 && (
                      <li>...and {additionalSkills.length - 3} more skills</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default SkillGapAnalysis;