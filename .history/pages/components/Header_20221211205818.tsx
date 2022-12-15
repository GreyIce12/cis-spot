import Image from "next/image";
import React, { useState } from "react";

import { BeakerIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";
import { clsx } from "clsx";

import { signOut, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@mui/material";

function Header() {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [burger, setBurger] = useState(false);

  return (
    <>
      <nav className="bg-white sticky border-gray-200 shadow-sm top-0 py-3 px-2  sm:px-4  rounded z-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center basis-1/3 cursor-pointer">
            <>
              <img
                src="http://cis.ncu.edu.jm/edtech/images/logo.png"
                className="h-6 mr-3 sm:h-9"
                alt="CIS Logo"
              />
              <span className="self-center text-xl text-blue-500 font-semibold whitespace-nowrap ">
                CIS SPOT
              </span>
            </>
          </a>
          {session ? (
            <>
              <div className="flex items-center justify-end md:order-2 basis-1/3">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  type="button"
                  className="flex  mr-3 text-sm bg-gray-800 rounded-full md:mr-3 focus:ring-4 focus:ring-gray-300"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only  mr-10">Open user menu</span>
                  <Image
                    className=" rounded-full "
                    src={session?.user?.image}
                    objectFit="contain"
                    width="50px"
                    height="50px"
                    alt="user photo"
                  />
                </button>
                <div
                  className={clsx(
                    " text-base list-none bg-white divide-y divide-gray-100 rounded shadow",
                    {
                      "hidden my-4 ": !isOpen,
                      "top-20 z-99 absolute": isOpen,
                    }
                  )}
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {session?.user?.name}
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      {session?.user?.email}
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="/"
                        onClick={() => signOut()}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setBurger(!burger);
                  }}
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={clsx(
                  "items-center justify-between w-full ",
                  {
                    "hidden md:flex md:w-auto md:order-": !burger,
                    "": burger,
                  }
                )}
                id="mobile-menu-2"
              >
                <ul className="flex flex-col p-4 mt-4 border basis-1/3 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <form className="flex flex-1 items-center basis-1/3 space-x-2 rounded-md border-none border-gray-500 px-3 py-1">
                    <input
                      type="text"
                      placeholder="Search"
                      className="flex-1 rounded-md border-gray-400 bg-transparent outline-none "
                    />
                    <SearchIcon className="h-7 w-7 text-gray-400" />
                    <button type="submit" hidden />
                  </form>

              <div className="hidden w-full" >
                <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 ">
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:hover:text-white">Services</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                  </li>
                </ul>
              </div>

              </ul>
              </div>
            </>
          ) : (
            <>
            
              <div className="flex items-center  justify-end md:order-2 basis-1/3 ">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  type="button"
                  className="flex mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                  id=" user-menu-button "
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className=" rounded-full "
                    src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
                    objectFit="contain"
                    width="60px"
                    height="60px"
                    alt="user photo"
                  />
                </button>

                <div
                  className={clsx(
                    "z-50 text-base list-none bg-white divide-y divide-gray-100 rounded shadow",
                    {
                      "hidden my-4 ": !isOpen,
                      "my-4": isOpen,
                    }
                  )}
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white"></span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"></span>
                  </div>
                  <ul className="py-1" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="/"
                        onClick={() => signIn()}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign In
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 basis-1/3"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <button
                    type="button"
                    data-collapse-toggle="navbar-search"
                    aria-controls="navbar-search"
                    aria-expanded="false"
                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                  <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Search icon</span>
                    </div>
                    <input
                      type="text"
                      id="search-navbar"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search..."
                    />
                  </div>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
