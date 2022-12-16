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
      url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
      params: {lang: 'en', media: 'True', topic:"entertainment"},
      headers: {
        'X-RapidAPI-Key': 'ee2cdbac8bmsh280a945993f3a68p16649cjsn46fa2b70f671',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    };

    await
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
