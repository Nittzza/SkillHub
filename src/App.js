import React, { useState } from 'react';
import SkillHub from './components/SkillHub';
import StudentProfile from './components/StudentProfile';
import ProjectPosting from './components/ProjectPosting';
import SkillGapAnalysis from './components/SkillGapAnalysis';
import SkillMatching from './components/SkillMatching';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <SkillHub onNavigate={setCurrentPage} />;
      case 'profile':
        return <StudentProfile onNavigate={setCurrentPage} />;
      case 'post-project':
        return <ProjectPosting onNavigate={setCurrentPage} />;
      case 'skill-analysis':
        return <SkillGapAnalysis onNavigate={setCurrentPage} />;
      case 'skill-matching':
        return <SkillMatching onNavigate={setCurrentPage} />;
      default:
        return <SkillHub onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;