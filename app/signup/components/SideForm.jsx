import React from 'react'
import Image from 'next/image'
import FormImage from '@/assets/FormImage.jpg'


export default function SideFom() {
  return (
   
     <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              PicVibe: A vision for 2024
            </p>

            {/* Title */}
            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
               a Fully photo gallary app when you can show your amzing images
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
               we prvide a lot of amzing things , a simple and understandble Ui ,great parfomance ect...
              </p>
            </div>
            {/* End Title */}

            {/* Blockquote */}
            <blockquote className="hidden md:block relative max-w-sm">
              <svg className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-800" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
              </svg>

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                share your memeoris and your expreince with us 
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">

                  <Image
                  src={FormImage}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className='h-8 w-8 rounded-full'
                      />
               
             
                  </div>


                  <div className="grow ms-4">
                    <div className="font-semibold text-gray-800 dark:text-gray-200">Mehalil safi </div>
                    <div className="text-xs text-gray-500">Full Stack dev / cumputer science student </div>
                  </div>
                </div>
              </footer>
            </blockquote>
            {/* End Blockquote */}
          </div>
          {/* End Col */}
        </div>
      </div>
    </div>





  
  )
}