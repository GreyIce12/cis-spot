import React from 'react'

interface newValue {
	
	[key: string]: any;
	_type: string;
	name: string;
	url: string;
	image: string;
	description: string;
	provider: [];
	date: string;
	thumbnmail:string;
	contentUrl:string;
  
}

interface Value{
  value: newValue;
}



function Innovations() {
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