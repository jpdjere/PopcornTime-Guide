import _ from "lodash";
import { FETCH_PAGES_MOVIES, FETCH_ALL_MOVIES, FETCH_MOVIES, FETCH_MOVIE, DELETE_MOVIE, UPDATE_FILTER } from "../actions";

export default function(state = {movies:{},sortOrder:true}, action) {
  switch (action.type) {

    case FETCH_PAGES_MOVIES:
      console.log("Array of moviesPages",action.payload);
      return { ...state, numberOfPages:action.payload };


    case FETCH_ALL_MOVIES:
      // console.log("ALLMOVIES",_.mapKeys(action.payload, "_id"));
      console.log(action.payload);
      let orderedArray = _.orderBy(action.payload, ['year']);
      let allMoviesChunks = _.chunk(orderedArray, 50);
      return { ...state, allMovies:orderedArray, allMoviesChunks:allMoviesChunks};


    case FETCH_MOVIES:
      console.log("Reducer fetch movies action.payload",_.mapKeys(action.payload, "_id"));
      console.log("Length of state.movies before update is:",Object.size(state.movies));
      let movies = _.mapKeys(action.payload, "_id");
      return {
        ...state,
        movies:{
          ...state.movies,
          ...movies
        }
      };


    case UPDATE_FILTER:
      //Si el sortBy que mando el usuario está en true, quiero pasar de 'asc' a 'desc'
      let order, newSortOrder;
      if(action.payload === true){
        order = 'desc'
        newSortOrder = false;
      }else{
        order = 'asc'
        newSortOrder = true;
      }
      let filteredArray = _.orderBy(state.allMovies, ['year'], [order]);
      return {...state,allMovies:filteredArray,sortOrder:newSortOrder}

    case DELETE_MOVIE:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
