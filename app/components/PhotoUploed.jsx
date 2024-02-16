'use client'
import { useState,useContext} from 'react'

import React from 'react'
//import { createSupabaseServerClient } from "@/utils/supabase/actions";
import { supabase } from '@/utils/supabase/client'
import PostContext from '../context/postContext'




export default  function PhotoUploed() {
    const [formData,setFormData]=useState({
    title:"",
    description:""

   })
   const [uploade,setUpload]=useState(false)
   function handleChange(event){

    setFormData((prev)=>{
      return {...prev,
        [event.target.name]:event.target.value
      }
    })

   }
  
  
   async function handleFileUpload(event){
    
    try{

        setUpload((prev)=>!prev);
        const file = event.target.files[0]
        console.log(file+'safi')
        const fileExt=file.name.split('.').pop()
        const fileName=`${formData.title}.${fileExt}`
        const {data:{user}}=await supabase.auth.getUser()
        if(!user){
            throw new Error("User nt auhtenticated for photo upload")
        }
        const filePath = `user_uploads/${user.id}/${fileName}`
        const metadata = {
          description: formData.description // Include description in metadata
      };
        const {error} = await supabase.storage.from('photos')
        .upload(filePath, file, { metadata })

    if (error){
        throw error
    }
    }catch(err){
        console.log(err)
    }  
    }
    const {setPost}=useContext(PostContext)
    function handleSubmit(){
      e.preventDefault()
      setPost(formData)
    }
   

  return (
   <div>
        <button type="button" className="py-3 px-4  w-[150px] inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
     Creat New 
    </button>

<div id="hs-focus-management-modal" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
         add post 
        </h3>
        <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
          <span className="sr-only">Close</span>
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>


      <div className="p-4 overflow-y-auto flex flex-col gap-5">


     
      <input 
      type="text"
       className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border border-solid border-slate-300 " 
       placeholder="Enter Image Title"
       onChange={handleChange}
       value={FormData.title}
       name='title'
       />

      <input
       type="text" 
      className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600  border border-solid border-slate-300 "
       placeholder="Enter Image Description"
       onChange={handleChange}
       value={FormData.description}
       name='description'
       
       
       />
       

      <label
         htmlFor="photo-upload"
         className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg m-4"
         >
            {uploade? 'Uploading...' : 'Upload Photo'}
            <input 
            type="file" 
            id="photo-upload" 
            onChange={handleFileUpload}
            disabled={uploade}
            className="hidden"
            />
         </label>


 
   



      </div>



      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal">
          Close
        </button>
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"  onClick={handleSubmit}>
          submit 
         </button>
        </div>
      </div>
     </div>
   </div>
   </div>
  )
}
