import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tpnazochmapbixyunstp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbmF6b2NobWFwYml4eXVuc3RwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDM0NTE2NywiZXhwIjoyMDY1OTIxMTY3fQ.HezYJ5ZPStZ0ywiXMDj-6nvTMf0vgjT0KnJQWu3EU8U";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
