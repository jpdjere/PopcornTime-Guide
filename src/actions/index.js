import axios from "axios";
import _ from "lodash";

export const FETCH_PAGES_MOVIES = "fetch_pages_movies";
export const FETCH_ALL_MOVIES = "fetch_all_movies";
export const FETCH_MOVIES = "fetch_movies";
export const FETCH_MOVIE = "fetch_movie";
export const DELETE_MOVIE = "delete_movie";
export const CREATE_MOVIE = "create_movie";
export const UPDATE_FILTER = "update_filter";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

/*-------------Busco el número de páginas de peliculas --------------*/
export function fetchNumberOfPages() {
  // numberPages es un array de 1 al numero de paginas
  const numberPages = getNumberOfPages();
  // console.log("numberPages",numberPages); son promesas
  return {
    type: FETCH_PAGES_MOVIES,
    payload: numberPages
  };
}

/*-------------Busco TODAS LAS PELICULAS --------------*/
export function fetchAllMovies() {
  // Redux Thunk will inject dispatch here:
  return dispatch => {

    getAllMovies().then((data) => {
      //getAllMovies devuelve un array de Promesas. Una vez que resuelven todas lo mando
      Promise.all(data).then((allMovies) => {

        console.log(_.flatten(allMovies));
        return dispatch({ type: FETCH_ALL_MOVIES, payload:_.flatten(allMovies) })
      })
    })


  }
}

/*-------------Busco las películas de una página --------------*/
export function fetchMoviesPage(moviePage) {
  // recordar que getMoviesPage devuelve una promesa que se guarda en movies y redux-promise se encarga de resolverla.
  const movies = getMoviesPage(moviePage);
  // console.log("movies",movies); son promesas
  return {
    type: FETCH_MOVIES,
    payload: movies
  };
}

/*-------------UPDATEO el filtro sort --------------*/
export function toggleFilter(sortOrder) {

  return {
    type: UPDATE_FILTER,
    payload: sortOrder
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
        resolve(pageMovies);

      })

    })
}

const getAllMovies = () => {
  return new Promise(
    (resolve, reject) => {

      let allMovies;
      getNumberOfPages().then((arrayOfPages) => {
        allMovies = arrayOfPages.map((page) => {
          return getMoviesPage(page);
        })
        // console.log("inside getAllMovies",allMovies);
        resolve(allMovies)
      })


    })
}


const sortObjectOfObjectsToArray = (data, sortBy) => {
  return _(data)
    .map(function(value, key) {
      return _.defaults({ sortBy: key }, value);
    })
    .sortBy(sortBy)
    .value();

}
