import Link from 'next/link';
import axios from 'axios';

// interface valueInterface{
	
// 	[key: string]: string;
// 	_type: string,
// 	name: string,
// 	url: string,
// 	image: string,
// 	description: string,
// 	provider: string,
// 	date: string,
  
// }

export interface Props{
value?: any
}



export default function News({value}:Props) 

{
	const newValue = Object.keys({value});
	return(

		<div className=" basis-1/4 ">
			<div className="flex justify-center">
			</div>
			<div className="flex justify-center items-center flex-col">
				<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
					Get Top <span className="text-danger">News</span> Quickly
				</h3>
				 { newValue.map((news, idx) => {
					return (
						<Link key={news.} href={`/${news?.url}`}>
							<div className="flex items-center   md:w-80 md:h-40">
								<h3>{news?.name}</h3>
							</div>
						</Link>
					);
				})} 
			</div>
		</div>
      

	);

}




export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/news');
	const {data: value} = res;
	
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