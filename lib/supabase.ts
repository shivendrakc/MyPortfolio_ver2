import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  image_path: string;
  order_index: number;
  created_at: string;
};
