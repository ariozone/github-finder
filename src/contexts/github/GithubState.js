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

const credentials = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
const searchEndPoint = "https://api.github.com/search/users?q="

const GithubState = props => {
  const initState = {
    users: [],
    loading: false,
    user: {},
    repos: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initState)

  // search users
  const onSearch = async searchQuery => {
    setLoading()
    const { data } = await axios.get(
      searchEndPoint + searchQuery + "&" + credentials
    )
    dispatch({ type: SEARCH_USERS, payload: data })
  }

  // get user

  // get repos

  // clear users

  // set spinner
  const setLoading = () => dispatch({ type: SET_SPINNER })
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        onSearch
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}
export default GithubState
