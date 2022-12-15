import Link from 'next/link';
import axios from 'axios';


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

export default function News({value}:Value) 

{
	
	return(

		<div className=" basis-1/4 ">
			<div className="flex justify-center">
			</div>
			<div className="flex justify-center items-center flex-col">
				
				 { value.map((news) => {
					return (
						<Link className='cursor-pointer space-x-4' key={news.key} href={`${news?.url}`} prefetch={false} >
							<div className="flex items-center  'cursor-pointer space-x-4 md:w-80 md:h-40">
								
							<img className='rounded-full' src={news?.image?.thumbnail?.contentUrl} alt="" width="100px" height="100px"/>
								<h3 className='pl-5' >{news?.name}</h3>
								
							</div>
						</Link>
					);
				})} 
			</div>
		</div>
      

	);

}



export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/news');
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
	