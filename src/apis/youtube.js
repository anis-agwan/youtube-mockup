import axios from "axios";

const KEY = 'AIzaSyADLk4mFcPpY2WRhPa-n5AGPCePkqPeixc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
