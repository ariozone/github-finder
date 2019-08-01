import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  state = {
    searchQuery: ""
  }
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  }
  handleChange = e => {
    const searchQuery = e.target.value
    this.setState({ searchQuery })
  }
  handleSubmit = e => {
    e.preventDefault()

    this.props.onSearch(this.state.searchQuery)
    this.setState({ searchQuery: "" })
  }
  handleClick = () => {
    this.props.onClear()
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
        {this.props.showClear && (
          <button className='btn light btn-block' onClick={this.handleClick}>
            Clear
          </button>
        )}
      </div>
    )
  }
}

export default Search
