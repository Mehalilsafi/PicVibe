'use client'

import React, { useState } from 'react';
import InputForm from './InputForm';
import Link from 'next/link';

export default function Form() {
 

  return (
    <div>
      {/* Form */}
      <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
        {/* Card */}
        <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Start your free trial</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 "
           
              >
              dont have an account ?

                <Link href='./signup' className='"text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'> singup in here </Link>
              </p>       
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                {/* Google Sign Up Icon */}
                {/* ... */}
              </svg>
              Sign up with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">
              Or
            </div>

            {/* Start of input form */}

            <InputForm 
  
            />


            {/* End of input form */}

         

           
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Form */}
    </div>
  );
}

