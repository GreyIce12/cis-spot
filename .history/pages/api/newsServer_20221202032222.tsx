import { url } from "inspector"

const API_KEY = process.env.API_KEY

export default{

  fetchTopStories:{
    title:"Top Stories",
    url:'https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty'
  }
} 