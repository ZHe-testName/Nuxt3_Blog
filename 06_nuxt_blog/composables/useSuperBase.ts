import { createClient } from '@supabase/supabase-js'  

const SUPER_BASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjeWd2cXZxaGNjb3lwdXhycXdqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODAzNTg2MSwiZXhwIjoxOTkzNjExODYxfQ.gh4eiWVI32CjPBBQdmh1Q4NQmKZQthpZDLbDy41u2LI';

const SUPER_BASE_URL = 'https://bcygvqvqhccoypuxrqwj.supabase.co';

function useSuperBase() {
  const supabase = createClient(SUPER_BASE_URL, SUPER_BASE_KEY);

  return {
    supabase,
  };
};

export default useSuperBase;
