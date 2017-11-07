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
      return { ...state, allMovies:orderedArray};


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
      return {...state,sortOrder:!action.payload}

    case DELETE_MOVIE:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
