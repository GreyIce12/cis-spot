import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import News from '../components/News';

import Post from '../components/Post';
import Sidebar from '../components/Sidebar';


interface newValue {
	
	key: any,
	  _type: string,
	  name: string,
	  url: string,
	  image: string,
	  description: string,
	  provider: [],
	  date: string,
	  thumbnmail:string,
	  contentUrl:string,

	
  }

  interface Value{
	value: newValue;
  }

const Home: NextPage<Value> = ({ value }) => {

	console.log(value)

	
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className=" flex  bg-gray-200 space-x-2">
        <Sidebar />
       
        <div className="py-2  flex flex-col">
        <Post/>
        <Feed/>
        </div>
    
		<News value={value} />
		</div>
		<Footer/>
    </div>
  )
}




 export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/news');
	const value = (await res.json.toString()) as Value
	
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
export default Home;
