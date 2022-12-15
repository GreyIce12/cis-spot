import {useState}  from 'react'
import { useSession } from 'next-auth/react'

function News() {

    const [articles, setArticles] = useState<string>('')   
    const {data: session} = useSession()

    if(session){

        const newsServer = async () =>{
            const res = await fetch('http://localhost:3000/api/newsServer')
            const {articles } = await res.json()
        
        setArticles(articles)
        
        }
    }
    
 
    
  return (
    <div className="basis-1/4" >
    <div>{articles}</div>
    <div></div>
    </div>
  )
}

export default News