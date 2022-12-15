import axios from 'axios';
import process from 'process';



export default async function handler( req, res) {
	if (req.method === 'GET') {
		var options = {
			method: 'GET',
			url: 'https://bing-news-search1.p.rapidapi.com/news',
			params: {safeSearch: 'Off', textFormat: 'Raw'},
			headers: {
				'x-bingapis-sdk': 'true',
				'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
				'x-rapidapi-key': process.env.API_KEY
			}
		};


		axios
			.request(options)
			.then(function (response) {
				const {data} = response;
				const {value} = data;
				res.status(200).json(value);
				console.log(value);
			})
			.catch(function (error) {
				console.error(error);
			});
	} else {
		res.status(400);
	}
}