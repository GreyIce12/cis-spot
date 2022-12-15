import Image from 'next/image'
import React from 'react'

import {  BeakerIcon,  MenuIcon, SearchIcon } from '@heroicons/react/solid';
import { BellIcon, } from '@heroicons/react/outline';


import {signOut, signIn, useSession} from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@mui/material';


function Header() {

    const {data: session} = useSession();

    

  return (

    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded z-50">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="http://cis.ncu.edu.jm/edtech/images/logo.png" className="h-6 mr-3 sm:h-9" alt="CIS Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CIS SPOT</span>
  </a>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={session?.user?.image} alt="user photo">
      </button>

      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{session?.user?.name}</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{session?.user?.email}</span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
        
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

    </ul>
  </div>
  </div>
</nav>


//
//     <div className="sticky top-0 flex z-50 bg-white px-4 py-2 items-center shadow-sm" >
   
//    <Link href="/" className='basis-1/3' >
//     <div className='flex cursor-pointer' >
//     <div className="relative h-10 w-20 flex-shrink-0 ">
   
   
   
//     <Image objectFit='contain' src="http://cis.ncu.edu.jm/edtech/images/logo.png" layout="fill" />
//     </div> 
    
//     <div className=" items-center text-2xl text-blue-500 font-medium">
//         <p>CIS SPOT</p>
   
//     </div>
//     </div>
//     </Link>

//     <div className=" mx-7 flex items-center text-blue-600  xl:min-w-[300px]">
//     <MenuIcon className="h-6 w-6" />
//     <p className='ml-2 hidden flex 1 lg:inline' >Home</p>
//     </div>

    
//         <form className="flex flex-1 items-center basis-1/3 space-x-2 rounded border border-gray-200 px-3 py-1">
           
//             <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none "/>
//             <SearchIcon className="h-7 w-7 text-gray-400"/>
//             <button type="submit" hidden />
//         </form>
    
// {session? (

// <div onClick={() =>signOut()} className=' basis-1/3 cursor-pointer justify-end items-center space-x-2   p-2 lg:flex' >
//             <div className="relative h-9 w-9 flex-shrink-0 " >

//     <Image objectFit='cover' className="rounded-full"  src={session?.user?.image} layout="fill"/>
//     <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
//     </div>
//     </div>):(

// <div onClick={() =>signIn()} className=' basis-1/3 cursor-pointer justify-end items-center space-x-2   p-2 lg:flex' >
// <Button className="transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 ">Sign In</Button>
// <div className="relative h-5 w-5 flex-shrink-0 flex" >

// <Image objectFit='cover'  src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png" layout="fill"/>


// </div>
// </div>
//     )}


//     </div>
  )
}

export default Header