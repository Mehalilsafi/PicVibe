import React from 'react'
import SideFom from './components/SideFom'
import Form from './components/From'
import { redirect } from 'next/navigation';
import {readUser} from "@/utils/supabase/readUser"

export default async function page() {

  const {data} = await readUser()
    if (data.session){
     redirect('/')
    }
  return (
    <div className='grid gap-4 grid-cols-2 '>
      <SideFom/>
      <Form/>
    </div>
  )
}
