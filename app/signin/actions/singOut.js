'use server'

import React from 'react'

export default async function signOut() {
    const { error } = await supabase.auth.signOut()
  }
  
