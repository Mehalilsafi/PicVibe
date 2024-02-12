'use client'
import React, { useState } from 'react'
import {signUpNewUser} from "../actions/signup"
export default  function InputForm() {
   const [FormData,setFormData]=useState({
    userName:"",
    email:"",
    password:""
   })
   const [isSingup,setSingup]=useState(false)
  
   async function handleSignUp(e){
     e.preventDefault();
     signUpNewUser(FormData)
       
   }
   



  function handleChange(e){
  setFormData((prev)=>{
    return {...prev , 
        [e.target.name]:e.target.value
    }
  })

  }
   const singupMassage= <p>PLEASE CHECK YOUR EMAIL FOR CONFMATIOON</p>
  return (
    <div className="flex flex-col gap-2.5 ">
    <form onSubmit={handleSignUp}>
    <label
     for="input-label" 
    class="block text-sm font-medium mb-2 dark:text-white" >UserName</label>
    <input type="text"
     id="input-label"
      className="border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
       placeholder="Enter user name"
       name='userName'
       onChange={handleChange}
       value={FormData.userName}
       />

    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
    <input type="email"
     id="input-label"
      className=" border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400   dark:focus:ring-gray-600"
       placeholder="you@site.com"
       name='email'
       onChange={handleChange}
       value={FormData.email}
       /> 
    
     
    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Password</label>
    <input type="password"
     id="input-label" 
     className=" border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400   dark:focus:ring-gray-600"
      placeholder="Enter password"
      name='password'
      onChange={handleChange}
      value={FormData.password}/> 
       
       <div className="mt-5">
              <button
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"  
                          
              >
                singup
              </button> 
            </div>
    </form>
    </div>
  )
}