import React from 'react'
import {  BeakerIcon,  MenuIcon, SearchIcon } from '@heroicons/react/solid';
import { BellIcon, } from '@heroicons/react/outline';

import SidebarOptions from './SidebarOptions';

import WindowIcon from '@mui/icons-material/Window';
import StorageIcon from '@mui/icons-material/Storage';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import DiamondIcon from '@mui/icons-material/Diamond';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import { useSession } from 'next-auth/react';

import Link from 'next/link';

function Sidebar() {

  const { data: session } = useSession();

  return (
    <div className=" bg-white basis-1/4 hidden lg:block md:block sticky top-5 h-screen shadow-lg">

<Link href="/"  >
  <a >
<SidebarOptions title="Home" Icon={WindowIcon}/>
</a>
</Link>

<Link href="/tech/Innovations" > 
  {/* <a href="/tech/Innovations"> */}
<SidebarOptions title="Tech Innovations" Icon={SignalCellularAltIcon}/>
{/* </a> */}
 </Link> 

<SidebarOptions title="Destress" Icon={LibraryBooksIcon}/>
<SidebarOptions title="Program Gems" Icon={DiamondIcon}/>

<p className=" text-blue-500 mx-7 align-center ">Pages</p>

<Link href="">
<SidebarOptions title="F.A.Q." Icon={HelpIcon}/>
</Link>
<Link href="../Contact.tsx">
<SidebarOptions title="Contact" Icon={MailIcon}/>
</Link>
{
  !session &&
  <Link href="">
<SidebarOptions title="Login" Icon={LoginIcon}/>
</Link>
}


    </div>
  )
}

export default Sidebar