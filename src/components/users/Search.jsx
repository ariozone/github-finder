import React from "react"

class Search extends React.Component {
  render() {
    return (
      <div>
        <form className='form'>
          <input type='text' name='search' placeholder='Search...' />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    )
  }
}
export default Search
