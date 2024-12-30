import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

let supabase;

export function setupSupabase() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase configuration');
  }

  supabase = createClient(supabaseUrl, supabaseKey);
  return supabase;
}

export function getSupabase() {
  if (!supabase) {
    return setupSupabase();
  }
  return supabase;
}