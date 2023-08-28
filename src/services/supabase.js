import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qvyaasnjdazjfibztrfl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eWFhc25qZGF6amZpYnp0cmZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyMjEwNjYsImV4cCI6MjAwNzc5NzA2Nn0.OM2fjjf0hLZi-DpSezbbngmTAZSZGytx1ZOdyW1qzsU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
