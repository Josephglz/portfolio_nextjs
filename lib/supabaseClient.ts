import { createClient, SupabaseClient } from '@supabase/supabase-js';

class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables');
    }

    try {
      this.client = createClient(supabaseUrl, supabaseAnonKey);
    } catch (error) {
      console.error('Error initializing Supabase client:', error);
      throw error;
    }
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}

const supabaseService = new SupabaseService();
export const supabase = supabaseService.getClient();
