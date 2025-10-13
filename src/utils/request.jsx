// const API_KEY = process.env.REACT_APP_api_key; //getting api key from env file

const API_KEY = import.meta.env.VITE_API_KEY; //getting api key from env file

//object containing all the requests we will make to the api
const Requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, //213 is the network id for netflix
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, //28 is the genre id for action movies};
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, //35 is the genre id for comedy movies
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, //27 is the genre id for horror movies
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, //10749 is the genre id for romance movies
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, //99 is the genre id for documentaries
  fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`, //878 is the genre id for sci-fi movies
  fetchTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,
};
export default Requests;
