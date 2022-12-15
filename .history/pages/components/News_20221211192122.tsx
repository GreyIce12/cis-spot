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

		<div className=" basis-1/4   ">
			<div className='bg-white top-36 mx-5 mt-4  hidden h-fit m-w-[300px] rounded-md border border-gray-300 lg:inline shadow-lg ' >
			<div className=" ml-8 mt-4 font-medium text-xl text-blue-600 ">
				TOP NEWS
			</div>
			<div className="flex justify-center items-center flex-wrap flex-col">
				
				 { value.map((news) => {
					return (
						<Link className='cursor-pointer space-x-4' key={news.key} href={`${news?.url}`} prefetch={false} >
							<div className="flex items-center ml-2 p-2 cursor-pointer space-x-2 md:w-80 md:h-40">
								
							<img className='rounded-full' src={news?.image?.thumbnail?.contentUrl} alt="" width="80px" height="90px"/>
								<h3 className='pl-5 font-normal text-sm hover:text-blue-500' >{news?.name}</h3>
								
							</div>
						</Link>
					);
				})} 
			</div>
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
	