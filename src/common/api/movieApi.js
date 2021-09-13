import { APIKey } from "./MovieApiKey";
import Url from "./Url";


export   const  fetchMovies = async (searchMovies, year) =>{
  // const recwest = await fetch(`http://www.omdbapi.com/?s=${searchMovies}&y=${year}&apikey=${APIKey}`);
  //  const data= await recwest.json();
  //  return data;
   const response = await Url.get(`?apiKey=${APIKey}&s=${searchMovies}&y=${year}`);
   return response.data;
  }

  export const fetchMovieDetail =async (id) => {
    // const response = await Url.get(`?apiKey=${APIKey}&s=${searchMovies}&y=${year}`);
      const response = await Url.get(`?apiKey=${APIKey}&i=${id}`);
      return response.data;
    }
  