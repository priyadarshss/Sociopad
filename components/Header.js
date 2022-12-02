import Image from 'next/image'
import React from 'react'
import { HiOutlineSearch, HiOutlineHome } from 'react-icons/hi'
import { CgMenuGridO } from 'react-icons/cg'
import { AiFillMessage, AiFillBell, AiOutlineShop } from 'react-icons/ai'
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from 'react-icons/md'
import { RiFlag2Line } from 'react-icons/ri'
import { IoGameControllerOutline } from 'react-icons/io5'
const Header = () => {
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
      <div className='flex min-w-fit'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eo_circle_deep-orange_letter-s.svg/1024px-Eo_circle_deep-orange_letter-s.svg.png'
          alt='logo'
          height={40}
          width={40}
        />
      </div>
      <div className='flex items-center space-x-2 py-1 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
        <HiOutlineSearch size={20} />
        <input
          className='hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink'
          type='text'
          placeholder='Search Sociopad'
        />
      </div>

      <div className='flex flex-grow justify-center mx-2'>
        <div className='flex items-center'>
          <div className='flex items-center  h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer '>
            <HiOutlineHome className='mx-auto text-orange-700' size={25} />
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer '>
            <RiFlag2Line className='mx-auto text-gray-600' size={25} />
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer '>
            <MdOutlineOndemandVideo
              className='mx-auto text-gray-600'
              size={25}
            />
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer '>
            <AiOutlineShop className='mx-auto text-gray-600' size={25} />
          </div>
          <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer '>
            <IoGameControllerOutline
              className='mx-auto text-gray-600'
              size={25}
            />
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-2 justify-end min-w-fit'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eo_circle_deep-orange_letter-s.svg/1024px-Eo_circle_deep-orange_letter-s.svg.png'
          alt='Profile picture'
          height={40}
          width={40}
          className='rounded-full cursor-pointer'
        />
        <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs'>
          Priyadarsh
        </p>
        <CgMenuGridO
          size={20}
          className=' hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
        />
        <AiFillMessage
          size={20}
          className=' hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
        />
        <AiFillBell
          size={20}
          className=' hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
        />
        <MdOutlineExpandMore
          size={20}
          className=' hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300'
        />
      </div>
    </div>
  )
}

export default Header