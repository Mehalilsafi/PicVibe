'use client'
import React, { useContext ,useState,useEffect} from 'react'
import DropDown from './DropDown'
import Image from 'next/image'
import Liked from './Liked'
import deletePost from '../actions/deletePost'
import PhotoModel from "./PhotoModel"
export default function Hero({src,alt, width, height, photoName}) {

  const [showModal, setShowModal] = useState(false)

  function toggleModal(){
      setShowModal(!showModal)
  }
 
 const deletePostWithArgument = deletePost.bind(null,user,photoObjects)
  return (
    <div>
    
  <div className=''>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" >
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            onClick={() => setShowModal(true)}
          />
      
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              montains photgraphy
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Some quick 
            </p>  
            <div className='flex items-center justify-between'>
            <Liked/>
          <form action={deletePostWithArgument}>
           <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Delete 
              </button>
          </form>
            </div>
          </div>
        </div>
      
    
        </div>
        {
                showModal && <PhotoModel src={src}  onClose={toggleModal} />
            }
    </div>
  )
}






