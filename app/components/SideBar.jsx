import React from 'react'
import Link from 'next/link'
import { createSupabaseServerClient } from "@/utils/supabase/actions";
import { redirect } from 'next/navigation';
export default function SideBar() {


  const logout=async ()=>{
    "use server"
      const supabase= await createSupabaseServerClient()
      const { error } = await supabase.auth.signOut()
     if(error){
     console.log("sing out error is here : "+error)
     }
     redirect("/signin")
    
}
  return (
    <div className='flex  justify-start flex-col gap-6 '> 
     <button type="button" className="py-3 px-4  w-[150px] inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
     Creat New 
    </button>

<div id="hs-focus-management-modal" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
          Modal title
        </h3>
        <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
          <span className="sr-only">Close</span>
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>


      <div className="p-4 overflow-y-auto flex flex-col gap-5">
      <input type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border border-solid border-slate-300 " placeholder="Enter Image Title"/>
      <input type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600  border border-solid border-slate-300 " placeholder="Enter Image Description"/>
      <button type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
  upload image 
   </button>



      </div>



      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
          Close
        </button>
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          submit 
         </button>
        </div>
      </div>
     </div>
   </div>





   <ul className='flex flex-col gap-4 h-[300px]'>
     <Link href="/favorites"><li className='text-gray-500 hover:text-blue-500'>Favorites</li> </Link> 
    <li  className='text-gray-500 hover:text-blue-500'>Albums</li>
    <li className='text-gray-500 hover:text-blue-500'>Locations</li>
    <li className='text-gray-500 hover:text-blue-500'>Friendes</li>
    <li className='text-gray-500 hover:text-blue-500'>Settings</li>
   </ul>

   <form action={logout} >
      <button className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" >
      signout
      </button>
      </form>


    </div>
  )
}
