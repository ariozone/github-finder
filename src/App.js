import React, { Component } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import axios from "axios"
import "./App.css"
const usersEndPoint = "https://api.github.com/users"
const credentials = `client_id=${
  process.env.REACT_APP_GITHUB_CLIENT_ID
}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
const searchEndPoint = "https://api.github.com/search/users?q="

class App extends Component {
  state = {
    users: [],
    loading: false
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
  render() {
    const { loading, users } = this.state
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Search
            onSearch={this.onSearch}
            onClear={this.handleClear}
            showClear={users.length > 0 ? true : false}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    )
  }
}

export default App
