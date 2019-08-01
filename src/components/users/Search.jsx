import React from "react"

class Search extends React.Component {
  state = {
    searchQuery: ""
  }
  handleChange = e => {
    const searchQuery = e.target.value
    this.setState({ searchQuery })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.searchQuery)
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
