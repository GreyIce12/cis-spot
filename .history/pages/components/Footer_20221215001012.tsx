import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 shadow-sm dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
                <img src="http://cis.ncu.edu.jm/edtech/images/logo.png" className="mr-3 h-8" alt="CIS LOGO" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CIS SPOT</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">CIS SPOT™</a>. All Rights Reserved.
        </span>
    </footer>
    </div>
  )
}

export default Footer