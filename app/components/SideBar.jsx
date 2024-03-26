import React from "react";
import Link from "next/link";
import { createSupabaseServerClient } from "@/utils/supabase/actions";
import { redirect } from "next/navigation";
import PhotoUploed from "./PhotoUploed";

export default function SideBar() {
  const logout = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("sing out error is here : " + error);
    }
    redirect("/signin");
  };
  return (
   
      <div className="flex  justify-start flex-col gap-6 ">
        <PhotoUploed />

        <ul className="flex flex-col gap-4 h-[300px]">
          <Link href="/favorites">
            <li className="text-gray-500 hover:text-blue-500">Favorites</li>{" "}
          </Link>
          <li className="text-gray-500 hover:text-blue-500">Albums</li>
          <li className="text-gray-500 hover:text-blue-500">Locations</li>
          <li className="text-gray-500 hover:text-blue-500">Friendes</li>
          <li className="text-gray-500 hover:text-blue-500">Settings</li>
        </ul>

        <form action={logout}>
          <button className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
            signout
          </button>
        </form>
      </div>
   
  );
}
