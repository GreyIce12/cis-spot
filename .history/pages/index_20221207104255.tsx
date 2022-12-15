import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from './components/Feed';
import News from './components/News';

import Link from 'next/link';
import axios from 'axios';

import Post from './components/Post';
import Sidebar from './components/Sidebar';


interface Props{

	value?: ['Apples', 'Bannanas'];
}


const Home: NextPage<Props> = ({value}) => {

	const newValue = Object.keys({value});
	console.log(value);

  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

	  {value.map(news => {
					return (
						<Link href={news.url}>
							<div className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-danger text-lightYellow cursor-pointer transition duration-300 hover:border-primary hover:text-danger md:w-80 md:h-40">
								<h3>{news.name}</h3>
							</div>
						</Link>
					);
				})}


      <div className=" flex  bg-gray-200 space-x-3">
        <Sidebar />
       
        <div className="py-2  flex flex-col">
        <Post/>
        <Feed/>
        </div>
    
		<News value = {newValue} />
		</div>
    </div>
  )
}




export async function getStaticProps() {
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

export default Home