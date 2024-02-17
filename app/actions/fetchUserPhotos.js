'use server'
import React from 'react'
import { createSupabaseServerClient } from "@/utils/supabase/actions";

   async function fetchUserPhotos(user) {

    const supabase=await createSupabaseServerClient() 
    if (!user) return;
  
    const filePath = `user_uploads/${user.id}/`;
    
    try {
        const { data, error } = await supabase.storage
            .from('photos')
            .list(filePath);
  
        if (error) {
            console.error('Error fetching photos:', error.message);
            return null;
        }
  
        return data;
    } catch (error) {
        console.error('Error fetching photos:', error.message);
        return null;
    }
  }

  export default fetchUserPhotos