
import React from 'react'

import { createSupabaseServerClient } from "@/utils/supabase/actions";
import getPhotoUrls from '../actions/getPhotoUrl';
import fetchUserPhotos from '../actions/fetchUserPhotos'
import Hero from './Hero';
import DropDown from './DropDown';

export default  async function Photo() {
 const supabase=await createSupabaseServerClient() 
 const {data:{user}}= await supabase.auth.getUser()
 const photos=await fetchUserPhotos(user)
 const photoObjects = await getPhotoUrls(photos, user);
 console.log('photot object what return  :'+photoObjects)

 
 return (
   <div>


    
    <DropDown/>
    <div className='flex justify-between mt-4 '>
    <h2>photgraphy trip to Annaba </h2>
    <p className=' text-gray-500 dark:text-gray-400'>43 photo </p>
    </div>
        <div className='grid grid-cols-3 gap-4 mt-5' >
            {
                photoObjects.map((photo) => (
                    <Hero
                    key={photo.photoName}
                    src={photo.url}
                    alt={`Photo ${photo.photoName}`}
                    width={500}
                    height={500}
                    photoName={photo.photoName}
                    user={user}
                    photoObjects={photoObjects}
                    
                />
                )) 
            }
        </div>
            </div>
   
);

 
}