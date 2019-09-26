import React, { Fragment, useState } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import User from "./components/users/User"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import axios from "axios"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import GithubState from "./contexts/github/GithubState"

import "./App.css"
const usersEndPoint = "https://api.github.com/users"

const reposApi = "/repos?per_page=5&sort=created:asc"
const credentials = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

const App = () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const [repos, setRepos] = useState([])

  const showAlert = (message, type) => {
    setAlert({ message, type })
    setTimeout(() => setAlert(null), 3000)
  }

  const getRepos = async username => {
    setLoading(true)
    const { data: repos } = await axios.get(
      usersEndPoint + "/" + username + reposApi + "?" + credentials
    )
    setRepos(repos)
    setLoading(false)
  }

  return (
    <GithubState>
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User getRepos={getRepos} repos={repos} {...props} />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  )
}

export default App
