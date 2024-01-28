import React from 'react'
import SideFom from './components/SideFom'
import Form from './components/From'
export default function page() {
  return (
    <div className='grid gap-4 grid-cols-2 '>
      <SideFom/>
      <Form/>
    </div>
  )
}
