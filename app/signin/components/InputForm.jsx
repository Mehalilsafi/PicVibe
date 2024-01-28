import React from 'react'

export default function InputForm() {
  return (
    <div className="flex flex-col gap-2.5 ">
    <form action="">
    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">UserName</label>
    <input type="email" id="input-label" class="border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter user name"/>

    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
    <input type="email" id="input-label" class=" border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400   dark:focus:ring-gray-600" placeholder="you@site.com"/> 
    
     
    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Password</label>
    <input type="password" id="input-label" class=" border border-solid py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400   dark:focus:ring-gray-600" placeholder="Enter password"/> 

    </form>
    </div>
  )
}
