import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../components/Avatar'

function Channel() {

    const {query: { topic },
    }  = useRouter()

  return (

    <div className='h-24 bg-blue-500 p-8' >
        <div>
            <div>
                <Avatar seed={topic as string}/>
            </div>
        </div>

        <h1>Welcome to the r/{topic} channel</h1>
        <p>r/{topic}</p>
        
    </div>
  )
}

export default Channel