


import React from 'react'
import Form from "./components/Form"
import SideForm from "./components/SideForm"
export default function page() {
  return (
    <div className='grid gap-4 grid-cols-2 '>
    <SideForm/>
    <Form/>
  </div>
  )
}
