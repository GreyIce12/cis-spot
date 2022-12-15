import React from 'react'


function News() {
    const newsServer = async () =>{
        fetch('http://localhost:3000/api/newsServer')
    }
  return (
    <div>
    <div></div>
    <div></div>
    </div>
  )
}

export default News