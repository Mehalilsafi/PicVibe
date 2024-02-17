'use server'
import React from 'react'
import { Revalidate } from 'next/dist/server/lib/revalidate'
import {createSupabaseServerClient} from '@/utils/supabase/actions'
   async function addPost({title,description,photo}) {
    const supabase = await createSupabaseServerClient()
    const {data ,error}= supabase.from('post').insert([{

        title: title,
        description: description,
        url: photo.url 
    }])
    if (postError) {
        console.error('Error inserting data into Post table:', postError);
    } else {
        console.log('New post inserted into Post table:', newPost);
    }
}
export default addPost