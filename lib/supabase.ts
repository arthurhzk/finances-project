import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wdlxcsxufdxtcnwzccjj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbHhjc3h1ZmR4dGNud3pjY2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNDk2NDIsImV4cCI6MjAxNzYyNTY0Mn0.tQF3FtomTuJ39xlG19otjhWJncZjw15OfdxqhwI4UeI"
);

export default supabase;
