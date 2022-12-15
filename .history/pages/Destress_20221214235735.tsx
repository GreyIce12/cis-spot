import { isArray } from '@apollo/client/cache/inmemory/helpers';
import { truncate } from 'fs';
import React from 'react'
import Sidebar from './components/Sidebar';
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



export default function Destress({value}:Value) {

    const title_truncate = (input:any) =>
    input?.length > 150 ? `${input.substring(0, 20)}...` : input; 
  return (
 <div className='flex ' >
 
 <div className='basis-1/4 ' >
 <Sidebar />
 </div>
  <div className='flex flex-wrap justify-evenly items-center basis-3/4 space-x-2' >

    { value.articles.slice(0,40).map((news) => {
    return(
<div key={news?.key} className="max-w-sm bg-white border p-10 m-10 top-2 border-gray-200 rounded-lg shadow-md w-400 h-400 ">
    <a href={news?.link}>
        <img className="rounded-t-lg" src={news?.media} alt="" />
    </a>
    <div className="p-5">
        <a href={news?.clean_url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title_truncate(news?.title)}</h5>
        </a> 
       
    </div>

</div>
  

     ) }
    
    )}
    </div>
    </div>
  )
}



export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/destress');
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