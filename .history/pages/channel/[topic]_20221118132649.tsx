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

        <h1>Welcome to the r/{topic} channel</h1>
        
    </div>
  )
}

export default Channel