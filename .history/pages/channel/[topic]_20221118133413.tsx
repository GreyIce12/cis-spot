import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../components/Avatar'

function Channel() {

    const {query: { topic },
    }  = useRouter()

  return (

    <div className='h-24 bg-blue-600 p-8' >
        <div className='mx-8 mt-10 bg-white' >
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