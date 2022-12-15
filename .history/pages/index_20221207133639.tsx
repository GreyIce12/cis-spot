import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from './components/Feed';
import News from './components/News';

import Link from 'next/link';
import axios from 'axios';

import Post from './components/Post';
import Sidebar from './components/Sidebar';
import news from './api/news';


interface Props {

	value: {
		[key: string]: any;
		_type:string
		name:string
		url:string
		image:{}
		description:string
		provider:[]
		date:string

	};
}



const Home: NextPage<Props> = ({value}) => {

	
	console.log(value);

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
    
		{/* <News value = {newValue} /> */}
		<div className=" basis-1/4 ">
			<div className="flex justify-center">
			</div>
			<div className="flex justify-center items-center flex-col">
				<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
					Get Top <span className="text-danger">News</span> Quickly
				</h3>
		{value && value.length > 0 && value.map(news => (
					
						<Link key={news?.key } href={`/${news?.url}`}>
							<div className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-danger text-lightYellow cursor-pointer transition duration-300 hover:border-primary hover:text-danger md:w-80 md:h-40">
								<h3>{news?.name}</h3>
							</div>
						</Link>
					)
				)}
					</div>
		
      
		</div>
		</div>
    </div>
  )
}



export async function GetServerSideProps() {
	const res = await axios.get('https://localhost:3000/api/news');
	const  {data:value} = res;
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

export default Home

