'use server'
import React from 'react';
import { createSupabaseServerClient } from '@/utils/supabase/actions';

async function addPost({ title, description, photo }) {
    try {
        const supabase = await createSupabaseServerClient();
        const { data, error } = await supabase.from('post').insert([{
            title: title,
            description: description,
            url: photo.url 
        }]);
        
        if (error) {
            console.error('Error inserting data into Post table:', error);
            return { success: false, error: 'Error inserting data into Post table' };
        } else {
            console.log('New post inserted into Post table:', data);
            return { success: true, data: data };
        }
    } catch (error) {
        console.error('Error adding post:', error.message);
        return { success: false, error: 'Error adding post' };
    }
}

export default addPost;
