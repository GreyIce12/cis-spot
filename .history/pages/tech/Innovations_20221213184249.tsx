import React from 'react'

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



function Innovations({value}:Value) {
  return (
    <div>Innovations</div>
  )
}

export default Innovations

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