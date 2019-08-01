import React, { Component } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import axios from "axios"
import "./App.css"
const url = `https://api.github.com/users?client_id=${
  process.env.REACT_APP_GITHUB_CLIENT_ID
}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    this.setState({ loading: true })
    const { data: users } = await axios.get(url)
    this.setState({ users, loading: false })
  }
  render() {
    const { loading, users } = this.state
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Search />
          <Users users={users} loading={loading} />
        </div>
      </div>
    )
  }
}

export default App
