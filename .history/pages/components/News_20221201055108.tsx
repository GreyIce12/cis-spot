import React from 'react'

const cheerio = require('cheerio') // 1
const axios = require('axios')


export async function getServerSideProps() {
    

const url = 'https://www.gadgets360.com/news';


      const {data} = await axios.get(url);
      const $ = cheerio.load(data)


      const searchContext = `story_list `
      const title = $(searchContext).first().text()
      const link = $(searchContext).first().find('a').attr('href')  

        return {
            props:{
                title,link
            }
        }
      }
function News({title, link}) {
  return (
    <div>News</div>
  )
}

export default News