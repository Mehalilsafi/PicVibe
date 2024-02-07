'use server '

import {createSupabaseServerClient} from "./actions"

export async function readUser(){
         
    const supabase=  await createSupabaseServerClient()
    
    
    return supabase.auth.getSession()
    
}