import { supabase } from './supabaseClient'

// Student operations
export async function getStudents() {
  const { data, error } = await supabase
    .from('students')
    .select('*')
  return { data, error }
}

export async function getStudentById(id) {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single()
  return { data, error }
}

export async function createStudent(studentData) {
  const { data, error } = await supabase
    .from('students')
    .insert([studentData])
    .select()
  return { data, error }
}

// Project operations
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
  return { data, error }
}

export async function getProjectById(id) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()
  return { data, error }
}

export async function createProject(projectData) {
  const { data, error } = await supabase
    .from('projects')
    .insert([projectData])
    .select()
  return { data, error }
}

// Skills operations
export async function getSkills() {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
  return { data, error }
}

// Matches operations
export async function createMatch(matchData) {
  const { data, error } = await supabase
    .from('matches')
    .insert([matchData])
    .select()
  return { data, error }
}

export async function getMatchesByStudentId(studentId) {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .eq('student_id', studentId)
  return { data, error }
}
// Sign up user
export async function signUpUser(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    return { data, error }
  }
  
  // Sign in user
  export async function signInUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }
  
  // Sign out user
  export async function signOutUser() {
    const { error } = await supabase.auth.signOut()
    return { error }
  }