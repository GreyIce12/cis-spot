
import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';


interface newValue {

  articles:[
  key: any,
	_id:string,
author:string,
clean_url:string,
country:string,
media:string,
language:string,
link:string,
published_date:string,
rank:string,
rights:string,
summary:any,
title:any,
topic:any,
  ]
}

interface Value{
  value: newValue;
}



 function Innovations({value}:Value) {

  const truncate = (input:any) =>
  input?.length > 300 ? `${input.substring(0, 150)}...` : input; 

  const title_truncate = (input:any) =>
  input?.length > 150 ? `${input.substring(0, 20)}...` : input; 
  return (

    <>
 <div className='flex ' >
 
 <div className='basis-1/4 ' >
 <Sidebar />
 </div>

 <div className='basis-3/4'>
 <Banner img='https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1600' topic='TECH INNOVATIONS' summary='The place where your mind over flows with new streams of Technology' />
  <div className='flex flex-wrap justify-evenly items-center  space-x-2' >
    
    { value && Object.values(value.articles).slice(0,14).map((news:any , i) => {
    return(
<div key={news?.key}  className="max-w-sm transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 border p-10 m-10 top-2 border-gray-200 rounded-lg shadow-md w-400 h-400 ">
    <a href={news?.link}>
        <img className="rounded-t-lg" src={news?.media} alt="" />
    </a>
    <div className="p-5">
        <a href={news?.clean_url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title_truncate(news?.title)}</h5>
        </a>
        
        <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400">{ truncate(news?.summary)}</p>
        <a href={news?.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  

     ) }
    
    )}
    </div>
    </div>
    
    </div>
    <Footer/>
    </>
  )
}
export default Innovations;


export async function getServerSideProps() {
	const res = await fetch('/api/techno');
  const value = (await res.json()) as Value
	
  	
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