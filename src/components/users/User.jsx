import React, { Component, Fragment } from "react"
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired
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
    return this.props.loading ? (
      <Spinner />
    ) : (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
      </Fragment>
    )
  }
}
export default User
