import {JSDOM} from 'jsdom'
   
const newsServer = async() => {

  const res = await fetch('https://www.gadgets360.com/news')
  const html  = await res.text()

const dom = new JSDOM(html)
const document = dom.window.document

const articles = document.querySelectorAll('.news_listing')


return ''
    
}
export default newsServer