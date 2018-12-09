import React, { Component } from 'react'

import Youtube from '../../apis/YoutubeApi/YoutubeApi'
import SearchBar from '../../components/SearchBar/SearchBar'
import Videos from '../../components/Videos/Videos'
import VideoIframe from '../../components/VideoIframe/VideoIframe'
import Loader from '../../components/Loader/Loader'

class Main extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    loading: false,
    autoplay: 0
  }

  submitFormHandler = async term => {
    this.setState({
      loading: true,
      selectedVideo: null,
      videos: [],
      autoplay: 0
    })

    const videos = await Youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      selectedVideo: videos.data.items[0],
      videos: videos.data.items,
      loading: false
    })
  }

  selectVideoHandler = video => {
    this.setState({
      selectedVideo: video,
      autoplay: 1
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar submitForm={this.submitFormHandler} />

        {this.state.loading ? <Loader /> : null}

        {this.state.videos.length > 0 ? (
          <div className="ui grid">
            <div className="eleven wide column">
              <VideoIframe
                video={this.state.selectedVideo}
                autoplay={this.state.autoplay}
                showToast={this.props.showToast}
              />
            </div>

            <div className="five wide column">
              <Videos
                videos={this.state.videos.slice(1)}
                selectVideo={this.selectVideoHandler}
              />
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Main
