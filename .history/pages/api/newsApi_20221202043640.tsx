import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest,
  res: NextApiResponse) {
	if (req.method === 'GET') {
		var options = {
			method: 'GET',
			url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
			params: {lang: 'en', media: 'True'},
			headers: {
				
				'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
				'x-rapidapi-key': process.env.API_KEY
			}
		};
		axios
			.request(options)
			.then(function (response) {
				const {data} = response;
				const {value} = data;
				res.status(200).json(value);
			})
			.catch(function (error) {
				console.error(error);
			});
	} else {
		res.status(400);
	}
}