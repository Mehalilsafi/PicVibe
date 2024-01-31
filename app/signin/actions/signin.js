'use server'
import React from 'react'


export default async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password'
    })
  }
  
