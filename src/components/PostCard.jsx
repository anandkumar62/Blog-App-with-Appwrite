import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 h-full'>
        <div className='w-full justify-center mb-4 h-5/6'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl w-full h-full bg-center' />
        </div>
        <h2
          className='text-sm font-bold lg:text-lg truncate'
        >{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard