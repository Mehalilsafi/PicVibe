'use client'
import React, { useState } from 'react'

export default  function InputForm() {
   const [FomrData,setFormData]=useState({
    userName:"",
    email:"",
    password:""
   })

  
   function handleSignIn(e){
    e.preventDefault();
   }
   



  function handleChange(e){
  setFormData((prev)=>{
    return {...prev , 
        [e.target.name]:e.target.value
    }
  })

  }

  return (
    <div className="flex flex-col gap-2.5 ">
    <form action="">
    <label
     for="input-label" 
    class="block text-sm font-medium mb-2 dark:text-white" >UserName</label>
    <input type="email"
     id="input-label"
      class="border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
       placeholder="Enter user name"
       name='userName'
       onChange={handleChange}
       value={FomrData.userName}
       />

    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
    <input type="email"
     id="input-label"
      class=" border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400   dark:focus:ring-gray-600"
       placeholder="you@site.com"
       name='email'
       onChange={handleChange}
       value={FomrData.email}
       /> 
    
     
    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Password</label>
    <input type="password"
     id="input-label" 
     class=" border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400   dark:focus:ring-gray-600"
      placeholder="Enter password"
      name='password'
      onChange={handleChange}
      value={FomrData.password}/> 
      

    </form>
    </div>
  )
}