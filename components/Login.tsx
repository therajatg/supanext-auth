"use client";

// import Image from "next/image";
// import { createClient } from "@supabase/supabase-js";
// import type { Database } from "@/types/supabase";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// const supabase = createClient<Database>(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

const Login = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignup = async () => {
    await supabase.auth.signUp({
      email: "dguptarajat2@gmail.com",
      password: "123456",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignin = async () => {
    await supabase.auth.signInWithPassword({
      email: "dguptarajat2@gmail.com",
      password: "123456",
    });
    router.refresh();
  };

  const handleSignout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex gap-5 mt-4">
      <button
        className="border rounded-md p-2 bg-blue-500 font-semibold"
        onClick={handleSignup}
      >
        Signup
      </button>
      <button
        className="border rounded-md p-2 bg-blue-500 font-semibold"
        onClick={handleSignin}
      >
        Login
      </button>
      <button
        className="border rounded-md p-2 bg-blue-500 font-semibold"
        onClick={handleSignout}
      >
        Signout
      </button>
    </div>
  );
};

export default Login;

// We need the below

// options: {
//   emailRedirectTo: "http://localhost:3000/auth/callback",
// },

// because signup process is a few steps where when user clicks the signup button, ir then triggers a new user to be created in supabse which then sends email confirmation to the user email. When they click on the confirm in Mali, it goes to supabase and say that this user is a real user and then supabase needs somewhere to redirect that user and we redirect the user back to our application which is "http://localhost:3000/auth/callback" which in turn passed a unique auth code which we exchane for the user session.
//This path will work locally but we want it to be dynamic so that it works whether we are running code locally or in production.
