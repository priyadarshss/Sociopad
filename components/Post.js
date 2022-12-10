import Image from 'next/image'
import React from 'react'
import { FcLike } from 'react-icons/fc'
import { FaRegCommentAlt } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'
import { HiOutlineSave } from 'react-icons/hi'
import { FiHeart } from 'react-icons/Fi'

const Post = ({ post }) => {
  return (
    <div className='flex flex-col' key={post.id}>
      <div className='bg-white mt-6 rounded-md p-4'>
        <div className='flex items-center space-x-2'>
{          // eslint-disable-next-line @next/next/no-img-element
}          <img src={post.profilePic} alt='Profile pic' className='rounded-full w-10 h-10' />

          <div>
            <p className='font-medium'>{post.name}</p>
            <p className='text-xs text-gray-500'>{post.timeStamp}</p>
          </div>
        </div>
        <p className='py-4'>{post.post}</p>
      </div>
      {post.image && (
        <div className='relative h-60 md:h-96 bg-white'>
          <Image
            src={post.image}
            alt='Image'
            objectFit='cover'
            layout='fill'
          ></Image>
        </div>
      )}
      {/* Footer */}
      <div className='flex items-center justify-center bg-white p-2'>
        <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
          <FiHeart className='h-4'></FiHeart>
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
          <FaRegCommentAlt className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
          <RiShareForwardLine className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
        <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
          <HiOutlineSave className='h-4' />
          <p className='text-xs sm:text-base'>Save</p>
        </div>
      </div>
    </div>
  )
}

export default Post
