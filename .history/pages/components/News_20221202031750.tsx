import {useState}  from 'react'
import { useSession } from 'next-auth/react'
import newsServer from '../api/newsServer'

export async function getServerSideProps(context) {
    const jsonData = await newsServer()
    //...
}
function News() {

    const [articles, setArticles] = useState<string>('')   
    const {data: session} = useSession()


    if(session){

        
        const newsServer = async () =>{
            const res = await fetch('http://localhost:3000/api/newsServer')
            const {dom} = await res.json()
        
        setArticles(dom)
        
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