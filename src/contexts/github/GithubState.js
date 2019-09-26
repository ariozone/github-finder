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
const usersEndPoint = "https://api.github.com/users"
const reposApi = "/repos?per_page=5&sort=created:asc"

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
    dispatch({ type: SEARCH_USERS, payload: data.items })
  }

  // get user
  const getUser = async username => {
    setLoading()
    const { data: user } = await axios.get(
      usersEndPoint + "/" + username + "?" + credentials
    )
    dispatch({ type: GET_USER, payload: user })
  }

  // get repos
  const getRepos = async username => {
    setLoading()
    const { data: repos } = await axios.get(
      usersEndPoint + "/" + username + reposApi + "?" + credentials
    )
    dispatch({ type: GET_REPOS, payload: repos })
  }

  // clear users
  const handleClear = () => dispatch({ type: CLEAR_USERS })

  // set spinner
  const setLoading = () => dispatch({ type: SET_SPINNER })
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        onSearch,
        handleClear,
        getUser,
        getRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}
export default GithubState
