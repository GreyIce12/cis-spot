import axios from "axios";
import process from "process";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    var options = {
      method: "GET",
      url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2badf7170944',
      params: {lang: 'en', media: 'True', topic:"tech"},
      headers: {
        'X-RapidAPI-Key':  process.env.API_KEY_CATCHER,
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    };

    axios
    .request(options)
    .then(function (response) {
        const data = response.data;  
        res.status(200).json(data);
    
    
    })
    .catch(function (error) {
        console.error(error);
    });
} else {
    res.status(400);
}
}
