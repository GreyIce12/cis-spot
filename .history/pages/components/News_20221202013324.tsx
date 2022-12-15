import React from 'react'
import { useSession } from 'next-auth/react'

function News() {

    const {data: session} = useSession()

    if(session == null || session){

        const newsServer = async () =>{
            fetch('http://localhost:3000/api/newsServer')
        
        
        }
    }
    
 
    
  return (
    <div>
    <div></div>
    <div></div>
    </div>
  )
}

export default News