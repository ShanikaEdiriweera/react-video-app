import React, { Component } from 'react';
import SearchBar from './search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './video_list';
import VideoDetail from './video_detail'

const API_KEY = "AIzaSyCGI3OHyEo63weO2W7yubt5uYG-HnRv6M4"

export default class App extends Component {
  
  constructor(props){
    super(props)
    
    this.state = { 
      videos: [],
      selectedVideo: null
    }
    this.videoSearch("Table tennis")
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      console.log(videos)
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}
