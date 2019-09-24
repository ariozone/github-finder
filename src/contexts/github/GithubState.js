import React, { useReducer } from "react"
import axios from "axios"
import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import {
  SEARCH_USERS,
  SET_SPINNER,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from "../types"

const GithubState = props => {
  const initState = {
    users: [],
    loading: false,
    user: {},
    repos: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initState)

  // get users

  // get repos

  // clear users

  // set spinner

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}
export default GithubState
