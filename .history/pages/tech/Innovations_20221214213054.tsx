import React from 'react'
import axios from 'axios';

interface newValue {
	
	[key: string]: any;
	_id:string
author:string
clean_url:string
country:string
language:string
link:string
published_date:string
rank:string
rights:string
summary:string
title:string
topic:string
  
}

interface Value{
  value: newValue;
}



export default function Innovations({value}:Value) {
  return (
 
  <div>

    { value.map((news) => {
    return(
<div key={news.key} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.summary}</p>
        <a href={value.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  

     ) }
    
    )}
    </div>

  )
}



export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/techno');
	const value = ( res.text()) as Value
  // const res = await axios.get('https://localhost:3000/api/techno');
	// const {data:value} = res as unknown as Value;
	
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