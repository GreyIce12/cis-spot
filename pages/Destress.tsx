
import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
//import axios from 'axios';

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



 function Destress({value}:Value) {

    const title_truncate = (input:any) =>
    input?.length > 150 ? `${input.substring(0, 20)}...` : input; 
  return (
    <>
 <div className='flex ' >
 
 <div className='basis-1/4 ' >
 <Sidebar />
 </div>
 <div className='basis-3/4'>
 <Banner img='https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1600' topic='Destress' summary='If you need a break, there many things to check out on this page, hobbies and Entertainment!'/>
  <div className='flex flex-wrap justify-evenly items-center space-x-2' >

     {value && Object.values(value.articles).slice(0,19).map((news:any, i) => {
    return(
<div key={i} className="max-w-sm border p-5 m-10 top-2 border-gray-200 rounded-lg shadow-md w-400 h-400 transition ease-in-out delay-150 hover:bg-gray-300 bg-blue-100 hover:-translate-y-1  hover:scale-110">
    <a href={news?.link}>
        <img className="rounded-t-lg" src={news?.media} alt="" width="400" height="400" />
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
    
    </div>
    <Footer/>
    </>
  )
}
export default Destress;


async function getStaticProps() {
	const res = await fetch('/api/destress');
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
