import React from "react"
import PropTypes from "prop-types"

const Search = ({ onClear, setAlert, onSearch }) => {
  const handleChange = e => {
    const searchQuery = e.target.value
    this.setState({ searchQuery })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (this.state.searchQuery === "") {
      setAlert("Please enter a search keyword!", "danger")
    } else {
      onSearch(this.state.searchQuery)
      this.setState({ searchQuery: "" })
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
          value={this.state.searchQuery}
          onChange={handleChange}
        />
        <input
          id='search'
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {this.props.showClear && (
        <button className='btn light btn-block' onClick={handleClick}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}
export default Search
