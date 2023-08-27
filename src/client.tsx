import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://wojblxyzrrudcnjuuqqv.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvamJseHl6cnJ1ZGNuanV1cXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNTY5NzksImV4cCI6MjAwODczMjk3OX0.nHxDBFSiJIXKB-xVX8UaTflr9EMjjSIFyGKcL6TTI0M";
export const supabase = createClient(supabaseUrl, supabaseKey);
