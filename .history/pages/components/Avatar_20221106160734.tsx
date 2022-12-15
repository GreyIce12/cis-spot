import Image from 'next/image'
import React from 'react'

import {useSession} from 'next-auth/react'
import { Props } from 'next/script';

type Props = {
  seed?:string
  large?:boolean
}
function Avatar(props: Props) {

    const {data: session, status} = useSession();

    const img = `{session?.user?.image}`;
  return (
    <div className=" overflow-hidden relative h-12 w-12 rounded-full border-gray-500 bg-white">
        <Image layout="fill" objectFit="cover" src={img} />
    </div>
  )
}

export default Avatar