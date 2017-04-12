import React, { Component } from 'react';

class VideoListItem extends Component {
  render(){

    var videoImageUrl = this.props.video.snippet.thumbnails.default.url;
    var videoTitle = this.props.video.snippet.title;

    return(
      <li onClick={ ()=> this.props.onVideoSelect(this.props.video) } className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" alt="video thumbnail" src={ videoImageUrl }/>
          </div>

          <div className="media-body">
            <div className="media-heading">{ videoTitle }</div>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoListItem;
