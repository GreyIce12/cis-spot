import { isArray } from '@apollo/client/cache/inmemory/helpers';
import { truncate } from 'fs';
import React from 'react'
//import axios from 'axios';

interface newValue {

	articles:[
  key: string,
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



export default function Innovations({value}:Value) {

  const truncate = (input:any) =>
  input?.length > 300 ? `${input.substring(0, 150)}...` : input; 

  const title_truncate = (input:any) =>
  input?.length > 150 ? `${input.substring(0, 20)}...` : input; 
  return (
 
  <div className='flex flex-wrap justify-evenly items-center space-x-2' >

    { value.articles.slice(0,25).map((news) => {
    return(
<div key={news?.key} className="max-w-sm bg-white border p-10 m-20 top-2 border-gray-200 rounded-lg shadow-md ">
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

  )
}



export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/techno');
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