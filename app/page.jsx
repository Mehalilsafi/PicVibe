import Image from "next/image";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Hero  from "./components/Hero";
import { redirect } from 'next/navigation';
import {readUser} from "@/utils/supabase/readUser"
export default async function Home() {
     const {data} = await readUser()
     if (!data.session){
      redirect('/signin')
     }
  return (
   <div>
  
    <div className="grid grid-cols-5 gap-4 mx-auto px-4 mt-5">
    <div className="col-span-1" style={{ minWidth: '20%' }}>
    <SideBar />
    </div>
  <div className="col-span-4" style={{ minWidth: '80%' }}>
     <Hero />
   </div>
   </div>


   </div>
  );
}
