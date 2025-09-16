import axios from "axios"; //axios used for fetching data from api

//creating an instance of axios with a base url

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //this is the base url of every moview in the api
});

export default instance;
//we can use this instance to make requests instead of writing the base url every time
