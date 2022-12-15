import Image from 'next/image'
import React from 'react'

import {useSession} from 'next-auth/react'


type Props = {
  seed?:string
  large?:boolean
}
function Avatar({seed, large}: Props) {

    const {data: session, status} = useSession()
    seed = `session?.user?.image`;
    
  return (
    <div className=" overflow-hidden relative h-12 w-12 rounded-full border-gray-500 bg-white">
        <Image layout="fill" objectFit="cover" src={seed} />
    </div>
  )
}

export default Avatar