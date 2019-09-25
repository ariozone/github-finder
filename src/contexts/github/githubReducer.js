import {
  SEARCH_USERS,
  SET_SPINNER,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from "../types"

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case SET_SPINNER:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
