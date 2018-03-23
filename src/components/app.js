import React, { Component } from 'react';
import _ from 'lodash'
import SearchBar from './search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './video_list';
import VideoDetail from './video_detail'

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail'

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
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />

        <BookList />
        <BookDetail />

        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}
