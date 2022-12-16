import Link from 'next/link';
import axios from 'axios';


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
 function News({value}:Value) 

{
	
	return(

		<div className=" basis-1/4 items-center justify-start ">
			<div className='bg-white hidden lg:block mt-2 rounded-lg shadow-lg mx-6 p-8' >
			<div className=" ml-8 mt-4 font-medium text-xl text-blue-600 ">
				TOP NEWS
			</div>
			<div className="flex justify-center items-center  flex-wrap flex-col">
				
				 {value && Object.values(value).map((news:any, i) => {
					return (
						<Link className='cursor-pointer space-x-4 ' key={i} href={`${news?.url}`} prefetch={false} >
							<div className=" top-2 flex items-center ml-2 transition ease-in-out delay-150 hover:bg-blue-100 rounded-lg hover:-translate-y-1  hover:scale-110  p-2 cursor-pointer space-x-2 md:w-80 md:h-40">
								
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
export default News;


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
	

