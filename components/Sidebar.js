import Image from 'next/image'
import React from 'react'
import SidebarItem from './SidebarItem'
import { ImUsers } from 'react-icons/im'
import { MdGroups } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from 'react-icons/md'
import { BsStopwatch } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]'>
      <div className='flex items-center space-x-2 py-3 pl-4  hover:bg-gray-200 rounded-l-xl cursor-pointer '>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eo_circle_deep-orange_letter-s.svg/1024px-Eo_circle_deep-orange_letter-s.svg.png'
          alt='logo'
          height={40}
          width={40}
          className='rounded-full cursor-pointer'
        />
        <p className='hidden sm:inline-flex font-medium'>Priyadarsh</p>
      </div>
      <SidebarItem Icon={ImUsers} value='Friends' />
      <SidebarItem Icon={MdGroups} value='Groups' />
      <SidebarItem Icon={AiOutlineShop} value='Store' />
      <SidebarItem Icon={MdOutlineOndemandVideo} value='Watch' />
      <SidebarItem Icon={BsStopwatch} value='Memories' />
      <SidebarItem Icon={MdOutlineExpandMore} value='See more' />{' '}
    </div>
  )
}

export default SideBar
