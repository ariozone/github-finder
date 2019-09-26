import React, { useState, useContext } from "react"
import GithubContext from "../../contexts/github/githubContext"
import AlertContext from "../../contexts/alert/alertContext"

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (searchQuery === "") {
      alertContext.showAlert("Please enter a search keyword!", "danger")
    } else {
      githubContext.onSearch(searchQuery)
      setSearchQuery("")
    }
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
      {githubContext.users.length > 0 && (
        <button
          className='btn light btn-block'
          onClick={githubContext.handleClear}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
