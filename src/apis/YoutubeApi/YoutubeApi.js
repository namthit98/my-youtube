import axios from 'axios'

const KEY = 'AIzaSyABl2Kujtvpu8V2r5TzRFWffIbZodLjSN0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: '10',
    key: KEY
  }
})