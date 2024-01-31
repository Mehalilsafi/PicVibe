'use server'


import React from 'react'
import {createServerClient} from "@/utils/supabase/actions"
export default async function signUpNewUser({userName,email,password}) {
    const supabase=createServerClient()

    const { data, error } = await supabase.auth.signUp({
      email: {email},
      password: {password}
      
    })
  }
  