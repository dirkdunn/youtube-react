import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js';
import VideoDetail from './components/VideoDetail.js';

import axios from 'axios';
import './App.css';

const youtube_key = 'AIzaSyBfC-K6OUFUCitO1R5QryHPcdz2ZbH0_Tk';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount(){
    this.search('Queens of the stone age');
  }

  search(term){
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: term,
        key: youtube_key,
        type: 'video',
        part: 'snippet'
      }
    }).then((response)=>{
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
      // console.log('Youtube Videos: ', this.state.videos);
    }).catch((err)=>{
      console.error('There was an error: ', err);
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.search(term), 300);

    return (
      <div className="App container">
        <div className="row">
          <SearchBar search={this.search} onSearchTermChange={ videoSearch }/>
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos} onVideoSelect={ selectedVideo => { this.setState({ selectedVideo }) } }/>
        </div>
      </div>
    );
  }
}

export default App;
