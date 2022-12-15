import Link from 'next/link';
import axios from 'axios';



export async function getServerSideProps() {
	const res = await axios.get('https://localhost:3000/api/news');
	const {data: value} = res;
	console.log(value);
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
