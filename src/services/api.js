import { supabase } from './supabaseClient';

export async function submitWasteReport(payload) {
  if (!supabase) return { error: 'Supabase not configured' };
  return supabase.from('waste_reports').insert(payload).select('*').single();
}
