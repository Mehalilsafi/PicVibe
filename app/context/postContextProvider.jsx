'use client'

import React ,{useState } from 'react'
import PostContext  from './postContext'
const PostContextProvider=({children})=>{
    const [post,setPost]=  useState(null)
    return(
        <PostContext.Provider value={{post,setPost}}>
            {children}
        </PostContext.Provider>
    )

}
export default PostContextProvider