import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://iexmzrqrtfjoqobxipni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlleG16cnFydGZqb3FvYnhpcG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NTQyODMsImV4cCI6MjA2MTMzMDI4M30.YP9v3Q7WWv_oAGgdDuKUZV717J9O7wK7U99BScjWfV8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
