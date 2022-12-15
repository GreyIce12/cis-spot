import {JSDOM} from 'jsdom'
import { NextApiRequest, NextApiResponse } from 'next'
   
const newsServer = async(req: NextApiRequest, res: NextApiResponse ) => {

  const response = await fetch('https://www.gadgets360.com/news')
  const html  = await response.text()

const dom = new JSDOM(html)
const document = dom.window.document

const articles = document.querySelector('.news_listing')?.textContent

res.status(200).json({articles})

}
export default newsServer