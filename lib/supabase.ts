import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rtiuypxlbwtnhowcjcdq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0aXV5cHhsYnd0bmhvd2NqY2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNjk1MzIsImV4cCI6MjAyNDY0NTUzMn0.N_VrB0bOAT2ASP12hKYEiXDg6LrX7DpHMoi-t_udPf4"
);

export default supabase;
