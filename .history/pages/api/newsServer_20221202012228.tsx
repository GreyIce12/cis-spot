

const url = 'https://www.gadgets360.com/news'

  
   
const newsServer = async() => {

  const res = await fetch('https://www.gadgets360.com/news')
  const html  = await res.text()

  console.log("html",html)
  return ''


    
}
export default newsServer