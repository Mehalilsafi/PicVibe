'use client '
import { useState } from 'react';

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHeart
  } from "@fortawesome/free-solid-svg-icons";
export default function liked() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLiked,setIsLiked] =useState(true)
    function handlleFav(){
      setIsLiked((prev)=>{
          return !isLiked  
      })
    }
    const setColore= isLiked? "text-xl text-stone-300 " :"text-xl text-red-600"
  return (
  <div>   <FontAwesomeIcon icon={faHeart} className={setColore} onClick={handlleFav} />
  
  </div>
  )
}