import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Home = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("tasks").select();
  console.log("data", data);
  return <div>Home</div>;
};

export default Home;
