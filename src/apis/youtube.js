import axios from 'axios'
const KEY = 'AIzaSyD_oF6AwipVWMTGOE-GH5n3RSMDPnOgLy4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY}
    
})