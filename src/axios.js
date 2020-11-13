import axios from 'axios';

// Base url to make the request to the movie databae TMDB 
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

export default instance;