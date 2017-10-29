import _ from "lodash";
import { FETCH_PAGES_MOVIES, FETCH_MOVIES, FETCH_MOVIE, DELETE_MOVIE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PAGES_MOVIES:
      console.log("Array of moviesPages",action.payload);
      return { ...state, "numberOfPages":action.payload };
    case FETCH_MOVIES:
      console.log("Reducer fetch movies action.payload",action.payload);
      return {...state, "movies":_.mapKeys(action.payload, "_id")}
    case DELETE_MOVIE:
      return _.omit(state, action.payload);
    // case FETCH_MOVIE:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
