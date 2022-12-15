import Image from 'next/image'
import React from 'react'

import {useSession} from 'next-auth/react'

function Avatar() {

    const {data: session, status} = useSession();

    console.log(session?.user?.image);
  return (
    <div className=" overflow-hidden relative h-12 w-12 rounded-full border-gray-500 bg-white">
        <Image layout="fill" objectFit="cover" src={`${session?.user?.image}.svg`} />
    </div>
  )
}

export default Avatar