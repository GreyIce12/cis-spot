import Link from 'next/link';
import axios from 'axios';


type Props = {
	value: [];
  }
  
export default function Home({value}:Props ) 

{
	return (
		<div className="bg-bc min-h-screen">
			<div className="flex justify-center">
				<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-10 md:text-4xl">
					News Application
				</h2>
			</div>
			<div className="flex justify-center items-center flex-col">
				<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
					Get Top <span className="text-danger">News</span> Quickly
				</h3>
				{value.map((news) => {
					return (
						<Link href={news.url}>
							<div className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-danger text-lightYellow cursor-pointer transition duration-300 hover:border-primary hover:text-danger md:w-80 md:h-40">
								<h3>{news.name}</h3>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
export async function getServerSideProps() {
	const res = await axios.get('https://localhost:3000/api/newsApi');
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