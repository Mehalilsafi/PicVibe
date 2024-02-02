'use server'
import React from 'react'
import { createSupabaseServerClient } from "@/utils/supabase/actions";

export  async function signInWithEmail({email , password }) {

  const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if (error) {
      console.error('Error signin:', error.message);
      // Handle the error, show a message to the user, etc.
    } else {
      console.log('User signed IN successfully:', data);
      // Handle successful signup, maybe redirect the user, show a success message, etc.
    }
  }
  
