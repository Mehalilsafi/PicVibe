import React from 'react'
import Image from 'next/image'
import Person from "@/assets/person.jpg"

export default function Nav() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800 border-b-2  border-solid border-slate-200">
    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <a className="flex-none text-xl font-semibold dark:text-white" href="#">Pic vibe</a>
      <div className="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:ps-5 sm:pb-0 sm:overflow-x-visible [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
      <input
      type="text"
      className="py-3 px-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border border-solid border-slate-200 "
      placeholder="Input text"
    />
    <Image
      src={Person}
      width={50}
      height={50}
      alt="Picture of the author"
      className="rounded-full"
    />
       
      </div>
    </nav>
  </header>
  )
}
