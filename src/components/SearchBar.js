import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: '',
      placeholder: 'Search Youtube...'
    }
  }

  onTermChange(term){
    this.setState({term});
    this.props.onSearchTermChange(this.state.term);
  }

  render(){
    return(
      <div className="search-bar">
      <h1>React YT Search</h1>
      <input
      placeholder={this.state.placeholder}
      value={this.state.term}
      onChange={ e => this.onTermChange(e.target.value) }/>
      </div>
    )
  }
}

export default SearchBar;
