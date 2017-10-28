import axios from "axios";

export const FETCH_MOVIES = "fetch_movies";
export const FETCH_MOVIE = "fetch_movie";
export const DELETE_MOVIE = "delete_movie";
export const CREATE_MOVIE = "create_movie";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const movies = getAllMovies();
  console.log("movies",movies);
  return {
    type: FETCH_MOVIES,
    payload: movies
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_MOVIE,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_MOVIE,
    payload: id
  };
}


const getNumberOfPages = () => {
  return new Promise(
    (resolve, reject) => {
      axios.get('https://tv-v2.api-fetch.website/movies').then((response) => {
        console.log(response.data);
        let numberOfPages = response.data.length;
        let pageNumberArray = [...Array(numberOfPages).keys()];
        //Borro el 0 en el primer lugar
        pageNumberArray.shift();
        resolve(pageNumberArray)
      })
    }).catch((e) => {
      console.log(e);
    })
}

const getMoviesPage = (item) => {
  return new Promise(
    (resolve, reject) => {

      axios.get(`https://tv-v2.api-fetch.website/movies/${item}`).then((response) => {

        if(!response){
          console.log(`Error on item ${item}.`);
        }
        // console.log("res:",response.data)
        let pageMovies = response.data;
        allMovies = [...allMovies,...pageMovies];

      })

    })
}




/*

let allMovies = [];
const getAllMovies = () => {
  return new Promise(
    (resolve, reject) => {
      axios.get('https://tv-v2.api-fetch.website/movies').then((response) => {
        console.log(response.data);
        let numberOfPages = response.data.length;
        let pageNumberArray = [...Array(numberOfPages).keys()];
        //Borro el 0 en el primer lugar
        pageNumberArray.shift();
        console.log("pageNumberArray: ",pageNumberArray);

        let requests = pageNumberArray.map((item) => {
          return new Promise((_resolve) => {
            asyncFunction(item, _resolve);
          });
        })

        Promise.all(requests).then(() => {
          console.log('done');console.log(allMovies);
          resolve(allMovies);
        })

      }).catch((e) => {
        console.log(e);
      })

    }
  )
}

function asyncFunction (item, cb) {
  setTimeout(() => {

    axios.get(`https://tv-v2.api-fetch.website/movies/${item}`).then((response) => {

      if(!response){
        console.log(`Error on item ${item}.`);
      }
      // console.log("res:",response.data)
      let pageMovies = response.data;
      allMovies = [...allMovies,...pageMovies];
      cb();

    }).catch((e) => {
      console.log(e);
    })

  }, 25);
}


*/
