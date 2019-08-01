import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  state = {
    searchQuery: ""
  }
  static propTypes = { onSearch: PropTypes.func.isRequired }
  handleChange = e => {
    const searchQuery = e.target.value
    this.setState({ searchQuery })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSearch(this.state.searchQuery)
    this.setState({ searchQuery: "" })
  }
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='searchQuery'
            placeholder='Search...'
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <input
            id='search'
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    )
  }
}

export default Search
