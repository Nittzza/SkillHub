import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lnqcekjhmwxzuvjczusn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxucWNla2pobXd4enV2amN6dXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MDU5NDAsImV4cCI6MjA1ODI4MTk0MH0.pbFILqdA6v2tpVZuSx2l3BaznxzTHdgMxlUkubzOHYE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)