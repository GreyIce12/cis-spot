import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from './components/Feed';
import News from './components/News';


import Post from './components/Post';
import Sidebar from './components/Sidebar';
import Statistics from './components/Statistics';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className=" flex  bg-gray-200 space-x-3">
        <Sidebar />
       
        <div className="py-2  flex flex-col">
        <Post/>
        <Feed/>
        </div>
        <News/>
      </div>
    
  
    

    </div>
  )
}

export default Home
