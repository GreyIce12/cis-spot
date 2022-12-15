import {JSDOM} from 'jsdom'
import { NextApiRequest, NextApiResponse } from 'next'

import * as cheerio from 'cheerio';


const newsServer = async(req: NextApiRequest, res: NextApiResponse ) => {

  const response = await fetch('https://www.gadgets360.com/news')
  const html  = await response.text()

const $ = cheerio.load(html);
const dom = $('news_listing')
//const document = dom.window.document

//const articles = document.querySelector('.news_listing')?.textContent

res.status(200).json({dom})

}
export default newsServer