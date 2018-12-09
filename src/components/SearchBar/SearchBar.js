import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  changeInputHandler = e => {
    const text = e.target.value

    this.setState({ term: text })
  }

  submitFormHandler = e => {
    e.preventDefault()

    this.props.submitForm(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitFormHandler}>
          <div className="field">
            <label>Search video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.changeInputHandler}
              name="search-video"
              placeholder="Input video name ....."
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
