import React from 'react'

const cheerio = require('cheerio') // 1
const axios = require('axios')


export async function getServer() {
    

const url = 'https://www.gadgets360.com/news';


      const {data} = await axios.get('http://localhost:3000/api/news')
      const $ = cheerio.load(data)


      const searchContext = `story_list `
      const title = $(searchContext).first().text()
      const link = $(searchContext).first().find('a').attr('href')  

      console.log('title:', title,)
        return ''
      }

      type Props= {
        title?: string;
        link?: string;
    }
function News({title, link}:Props) {
  return (
    <div>
    <div>{title}</div>
    <div>{link}</div>
    </div>
  )
}

export default News