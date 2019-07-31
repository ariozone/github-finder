import React, { Component } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import axios from "axios"
import "./App.css"

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const { data: users } = await axios.get("https://api.github.com/users")
    this.setState({ users, loading: false })
  }
  render() {
    const { loading, users } = this.state
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Users users={users} loading={loading} />
        </div>
      </div>
    )
  }
}

export default App
