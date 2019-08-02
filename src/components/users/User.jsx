import React, { Component } from "react"
import Spinner from "../layout/Spinner"

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user
    return this.props.loading ? <Spinner /> : <div>{name}</div>
  }
}
export default User
