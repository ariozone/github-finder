import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import GithubContext from "../../contexts/github/githubContext"

const Search = ({ onClear, setAlert, showClear }) => {
  const githubContext = useContext(GithubContext)
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (searchQuery === "") {
      setAlert("Please enter a search keyword!", "danger")
    } else {
      githubContext.onSearch(searchQuery)
      setSearchQuery("")
    }
  }

  const handleClick = () => {
    onClear()
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchQuery'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleChange}
        />
        <input
          id='search'
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn light btn-block' onClick={handleClick}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propTypes = {
  onClear: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}
export default Search
