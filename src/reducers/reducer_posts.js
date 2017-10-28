import _ from "lodash";
import { FETCH_MOVIES, FETCH_MOVIE, DELETE_MOVIE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_MOVIE:
      return _.omit(state, action.payload);
    // case FETCH_MOVIE:
    //   return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_MOVIES:
      console.log("Reducer fetch movies action.payload",action.payload);
      return _.mapKeys(action.payload, "_id");
    default:
      return state;
  }
}
