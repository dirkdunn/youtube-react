import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
  render(){
    const videoListItems = this.props.videos.map((video)=>{
      // console.log(video);
      return (
        <VideoListItem
          key={ video.id.videoId }
          video={ video }
          onVideoSelect={ this.props.onVideoSelect }/>
      );
    });

    return (
      <ul className="col-md-4 list-group">
        { videoListItems }
      </ul>
    )
  }
}


export default VideoList;
