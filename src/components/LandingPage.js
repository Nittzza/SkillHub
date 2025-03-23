// App.js (simplified)
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import LandingPage from './components/LandingPage';
import Dashboard from './components/SkillHub'; // or your main app

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return (
    <div>
      {user ? <Dashboard /> : <LandingPage />}
    </div>
  );
}

export default App;
