import axios from 'axios';

/**
 * 
 * API key
 */
const API_KEY = 'your_api_key';

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});