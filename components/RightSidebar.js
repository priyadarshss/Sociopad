import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { RiVideoAddFill } from 'react-icons/ri'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'

const RightSidebar = () => {
  return (
    <div className='  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
      <div className='flex items-center text-gray-500'>
        <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
        <div className='flex space-x-1 px-2'>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <RiVideoAddFill />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <BiSearch />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name='Priyadarsh S S'
        src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinys rgb&dpr=2&w=500'
        status='online'
      />
      <Contacts
        name='Tom Cruise'
        src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        status='offline'
      />
      <Contacts
        src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinys rgb&dpr=2&w=500'
        name='Nikhil Gupta'
        status='online'
      />
      <Contacts
        src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        name='Shivam Kumar'
        status='online'
      />
    </div>
  )
}

export default RightSidebar
