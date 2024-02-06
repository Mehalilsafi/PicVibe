


import React from 'react'
import Form from "./components/Form"
import SideForm from "./components/SideForm"
import { redirect } from 'next/navigation';
import {readUser} from "@/utils/supabase/readUser"
export default async function page() {
  const {data} = await readUser()
  if (data.session){
   redirect('/')
  }
  return (
    <div className='grid gap-4 grid-cols-2 '>
    <SideForm/>
    <Form/>
  </div>
  )
}
