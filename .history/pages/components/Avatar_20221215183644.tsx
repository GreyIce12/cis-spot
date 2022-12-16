import Image from 'next/image'
import React from 'react'

import {useSession} from 'next-auth/react'


type Props = {
  seed?:any;
  large?:boolean;
}
function Avatar({seed, large}: Props) {

    const {data: session, status} = useSession()
 
    
  return (
    <div className=" overflow-hidden relative h-12 w-12 rounded-full border-gray-500 bg-white">
      {
        session?.user?.image &&

        
        <Image layout='fill' objectFit='contain'  src={`https://avatars.dicebear.com/api/open-peeps/${seed || session?.user?.name || 'placeholder'}.svg`} /> 
      }
        
    </div>
  )
}

export default Avatar