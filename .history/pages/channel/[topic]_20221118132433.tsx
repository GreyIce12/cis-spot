import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../components/Avatar'

function Channel() {

    const {query:{topic},}  = useRouter()
  return (

    <div>
        <div>
            <div>
                <Avatar seed={topic as string}/>
            </div>
        </div>
    </div>
  )
}

export default Channel