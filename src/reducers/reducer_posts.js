import _ from "lodash";
import { FETCH_PAGES_MOVIES, FETCH_MOVIES, FETCH_MOVIE, DELETE_MOVIE } from "../actions";

export default function(state = {movies:{}}, action) {
  switch (action.type) {
    case FETCH_PAGES_MOVIES:
      console.log("Array of moviesPages",action.payload);
      return { ...state, "numberOfPages":action.payload };
    case FETCH_MOVIES:
      console.log("state",state);
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
    case DELETE_MOVIE:
      return _.omit(state, action.payload);
    // case FETCH_MOVIE:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
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
