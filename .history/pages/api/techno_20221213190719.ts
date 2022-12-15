import axios from 'axios';
import process from 'process';

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(  req: NextApiRequest,
	res: NextApiResponse) {
	if (req.method === 'GET') {
		var options = {
			method: 'GET',
			
        url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
        params: {lang: 'en', media: 'True'},
        headers: {
            'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.API_KEY_CATCHER
          
        }
    }
		axios
			.request(options)
			.then(function (response) {
				const {data} = response;
				const {value} = data;
				res.status(200).json(value);
				console.log(value)
			})
			.catch(function (error) {
				console.error(error);
			});
	} else {
		res.status(400);
	}

}