import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from './components/Feed';
import News from './components/News';

import Link from 'next/link';
import axios from 'axios';

import Post from './components/Post';
import Sidebar from './components/Sidebar';

interface Props {
	value: value{}
  }


const Home: NextPage<Props> = ({ value }) => {

	
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
    
		<News value={value} />
		</div>
    </div>
  )
}

export default Home


export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/news');
	const {data: value} = res;
	console.log(value);
	if (!value) {
		return {
			notFound: true
		};
	}
	return {
		props: {
			value
		}
		
		
	};
	
}