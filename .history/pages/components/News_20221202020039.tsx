import {useState}  from 'react'
import { useSession } from 'next-auth/react'

function News() {

    const [articles, setArticles] = useState<string>('')   
    const {data: session} = useSession()

    if(session == null || session){

        const newsServer = async () =>{
            const res = await fetch('http://localhost:3000/api/newsServer')
            const {articles } = await res.json()
        
        setArticles(articles)
        
        }
    }
    
 
    
  return (
    <div>
    <div>{articles}</div>
    <div></div>
    </div>
  )
}

export default News