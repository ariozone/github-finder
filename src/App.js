import React, { Fragment, useState } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import User from "./components/users/User"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import axios from "axios"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
const usersEndPoint = "https://api.github.com/users"
const credentials = `client_id=${
  process.env.REACT_APP_GITHUB_CLIENT_ID
}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
const searchEndPoint = "https://api.github.com/search/users?q="
const reposApi = "/repos?per_page=5&sort=created:asc"

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  // async componentDidMount() {
  //   setState({ loading: true })
  //   const { data: users } = await axios.get(usersEndPoint + "?" + credentials)
  //   setState({ users, loading: false })
  // }

  const onSearch = async searchQuery => {
    setLoading(true)
    const { data } = await axios.get(
      searchEndPoint + searchQuery + "&" + credentials
    )
    setUsers(data.items)
    setLoading(false)
  }

  const handleClear = () => {
    setUsers([])
    setLoading(false)
  }

  const showAlert = (message, type) => {
    setAlert({ message, type })
    //setState({ alert: { message, type } })
    setTimeout(() => setAlert(null), 3000)
  }

  const getUser = async username => {
    setLoading(true)
    const { data: user } = await axios.get(
      usersEndPoint + "/" + username + "?" + credentials
    )

    setUser(user)
    setLoading(false)
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
                  <Search
                    onSearch={onSearch}
                    onClear={handleClear}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={props => (
                <User
                  getUser={getUser}
                  getRepos={getRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
