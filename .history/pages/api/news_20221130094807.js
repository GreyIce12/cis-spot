const cheerio = require('cheerio') // 1
const axios = require('axios')


const url = 'https://www.gadgets360.com/news';

  
   


  axios(url)  
  .then(
       response =>  {
      const htmlString = response.data
      const $ = cheerio.load(htmlString)

      const articles = []
      const searchContext = `story_list `
        $(searchContext, htmlString).each(function(){
      const title = $(this).text()
      const url = $(this).find('a').attr('href')  

      articles.push({
        title,
        url
      })

      console.log(articles)

    
       })
    })