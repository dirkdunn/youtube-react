import React, { Component } from 'react';

class VideoDetail extends Component {
  render(){
    if(!this.props.video){
      return(<h2>Loading B#$%!</h2>)
    }

    const video = this.props.video;
    const videoId= this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
      <div className="videoDetail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
