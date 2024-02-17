'use server'


import React from 'react'


import {createSupabaseServerClient} from '@/utils/supabase/actions'
async function deletePost() {
       const supabase =await createSupabaseServerClient(filePath)
       try {
        // Use the storage object's remove method to delete the file
        const { error } = await supabase.storage.from('photos').remove([filePath]);
        if (error) {
            console.error('Error deleting file:', error.message);
            return false; // or handle the error accordingly
        }
        console.log('File deleted successfully');
        return true; // or any other success indicator
    } catch (error) {
        console.error('Error deleting file:', error.message);
        return false; // or handle the error accordingly
    }
}






export default deletePost