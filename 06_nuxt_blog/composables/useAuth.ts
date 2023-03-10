//@ts-nocheck

function useAuth() {
  const user = useState('user', () => null);
  const { supabase } = useSuperBase();

  //listener on when changed auth state of current user on base
  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });

  const signUp = async ({ email, password, ...metadata }) => {
    const { user: u, error } = await supabase.auth.signUp({
      email,
      password,
    },
    {
      data: metadata,
      redirectTo: `${window.location.origin}/profile?source=email`,
    });

    if (error) throw error;

    return u;
  };

  const signIn = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    return u;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;
