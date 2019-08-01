import React, { Component, Fragment } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
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

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {}
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const { data: users } = await axios.get(usersEndPoint + "?" + credentials)
    this.setState({ users, loading: false })
  }

  onSearch = async searchQuery => {
    this.setState({ loading: true })
    const { data } = await axios.get(
      searchEndPoint + searchQuery + "&" + credentials
    )

    this.setState({ users: data.items, loading: false })
  }

  handleClear = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } })
    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  getUser = async username => {
    this.setState({ loading: true })
    const { data: user } = await axios.get(
      usersEndPoint + "/" + username + "?" + credentials
    )
    this.setState({ user, loading: false })
  }

  render() {
    const { loading, users, alert } = this.state
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
                      onSearch={this.onSearch}
                      onClear={this.handleClear}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
