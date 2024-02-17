'use client '
import React, { useContext } from 'react'
import DropDown from './DropDown'
import Image from 'next/image'
import Nature from '@/assets/nature.jpg'
//import Liked from './liked'
import { createSupabaseServerClient } from "@/utils/supabase/actions";
import PostContext from '../context/postContext';
import getPhotoUrls from '../actions/getPhotoUrl';
import fetchUserPhotos from '../actions/fetchUserPhotos'
import addPost from '../actions/addPost'

export default  async function Hero() {
 const post=useContext(PostContext)
 console.log('post log is here '+post)
 const supabase=await createSupabaseServerClient() 
 const {data:{user}}= await supabase.auth.getUser()
 const photos=await fetchUserPhotos(user)
 console.log('phootos frm fetch use function what retutn : '+photos)
 const photoObjects = await getPhotoUrls(photos, user);
 console.log('photot object what return  :'+photoObjects)

  return (
    <div>
    <DropDown/>
    <div className='flex justify-between mt-4 '>
    <h2>photgraphy trip to Annaba </h2>
    <p className=' text-gray-500 dark:text-gray-400'>43 photo </p>
    </div>
  <div className='grid grid-cols-3 gap-4 mt-5'>

   {
       photoObjects.map((photo) => (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" key={photo.name}>
          <Image
            src={photo.url}
            width={500}
            height={500}
            alt="Picture of the author"
          />
      
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              montains photgraphy
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Some quick 
            </p>  
            <div className='flex items-center justify-between'>
                           
         
            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Delete 
              </button>
            </div>
          </div>
        </div>
      ))
    }
        </div>

    </div>
  )
}






