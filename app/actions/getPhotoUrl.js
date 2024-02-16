'use server '
import React from 'react'
import { createSupabaseServerClient } from "@/utils/supabase/actions";



   async function getPhotoUrls(photos, user) {

    const supabase=await createSupabaseServerClient() 
    try {
        const photoPromises = photos.map(async (photo) => {
            const { data, error } = await supabase.storage
                .from('photos')
                .createSignedUrl(`user_uploads/${user.id}/${photo.name}`, 60 * 60);
            if (error) {
                console.error('Error generating signed URL:', error);
                return null;
            }
            return { url: data.signedUrl, photoName: photo.name };
        });
  
        const photoObjects = await Promise.all(photoPromises);
        console.log('Generated photo URLs:', photoObjects);
        return photoObjects;
    } catch (error) {
        console.error('Error in getPhotoUrls:', error);
        throw error;
    }
  }

  export default getPhotoUrls 