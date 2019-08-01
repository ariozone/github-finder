import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const UserItem = ({ user }) => {
  const { login, avatar_url, html_url } = user
  return (
    <div className='card text-center bg-light'>
      <img
        src={avatar_url}
        alt='avatar'
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  )
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
export default UserItem
