'use server'
import React from 'react'
import {createSupabaseServerClient} from '@/utils/supabase/actions'
export   async function addPost() {
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
