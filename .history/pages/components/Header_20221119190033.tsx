import Image from 'next/image'
import React from 'react'

import {  BeakerIcon,  MenuIcon, SearchIcon } from '@heroicons/react/solid';
import { BellIcon, } from '@heroicons/react/outline';


import {signOut, signIn, useSession} from 'next-auth/react';


function Header() {

    const {data: session} = useSession();

    

  return (
    <div className="sticky top-0 flex z-50 bg-white px-4 py-2 items-center shadow-sm" >
    <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
    <Image objectFit='contain' src="http://cis.ncu.edu.jm/edtech/images/logo.png" layout="fill" />
    <div className=" items-center text-2xl text-blue-500 font-medium">
        <h4>CIS SPOT</h4>
    </div>
    </div>
   
    
    <div className=" mx-7 flex items-center text-blue-600  xl:min-w-[300px]">
    <MenuIcon className="h-6 w-6" />
    <p className='ml-2 hidden flex 1 lg:inline' >Home</p>
    </div>

    
        <form className="flex flex-1 items-center space-x-2 rounded border border-gray-200 px-3 py-1">
           
            <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none "/>
            <SearchIcon className="h-7 w-7 text-gray-400"/>
            <button type="submit" hidden />
        </form>
    
    <div className="mx-5 flex space-x-2 text-blue-600 items-center lg:inline-flex">
        <BellIcon className="icon"/>
        

    </div>
{session? (

<div onClick={() =>signOut()} className='hidden cursor-pointer items-center space-x-2   p-2 lg:flex' >
            <div className="relative h-9 w-9 flex-shrink-0 " >

    <Image objectFit='cover' className="rounded-full"  src={session?.user?.image} layout="fill"/>
    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
    </div>):(

<div onClick={() =>signIn()} className=' cursor-pointer items-center space-x-2   p-2 lg:flex' >
<p className="text-gray-400">Sign In</p>
<div className="relative h-5 w-5 flex-shrink-0 flex" >

<Image objectFit='cover'  src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png" layout="fill"/>


</div>
</div>
    )}


    </div>
  )
}

export default Header