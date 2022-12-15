import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from './components/Feed';
import News from './components/News';

import Link from 'next/link';
import axios from 'axios';

import Post from './components/Post';
import Sidebar from './components/Sidebar';


const Home: NextPage = ({value}) => {
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
        <div className=" basis-1/4 ">
			<div className="flex justify-center">
			</div>
			<div className="flex justify-center items-center flex-col">
				<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
					Get Top <span className="text-danger">News</span> Quickly
				</h3>
				{value && value.map(news => {
					return (
						<Link href={news.url}>
							<div className="flex items-center   md:w-80 md:h-40">
								<h3>{news.name}</h3>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
      </div>
    
  
    

    </div>
  )
}

export default Home

export async function getServerSideProps() {
	const res = await axios.get('https://localhost:3000/api/news');
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
