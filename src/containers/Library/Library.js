import React, { Component } from 'react'
import YouTube from 'react-youtube'

import Video from '../../models/Video'

import Videos from '../../components/Videos/Videos'
import Loader from '../../components/Loader/Loader'

class Library extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    loaded: false,
    autoplay: 0,
    nowVideo: 0
  }

  componentWillMount() {
    this.setState(() => {
      return {
        videos: Video.load()
      }
    })
  }

  componentDidMount() {
    this.setState(() => {
      return {
        selectedVideo: this.state.videos[this.state.nowVideo]
      }
    })
  }

  selectVideoHandler = video => {
    const index = this.state.videos.findIndex(
      v => v.id.videoId === video.id.videoId
    )

    this.setState(prevState => {
      return {
        selectedVideo: prevState.videos[index],
        nowVideo: index,
        autoplay: 1
      }
    })
  }

  deleteVideoHandler = () => {
    const videos = [...this.state.videos]

    videos.splice(this.state.nowVideo, 1)

    Video.remove(this.state.nowVideo)

    this.setState({
      videos,
      selectedVideo: videos[0],
      nowVideo: 0
    })
  }

  nextVideo = () => {
    let nowVideo = this.state.nowVideo

    if (nowVideo + 1 >= this.state.videos.length) {
      nowVideo = 0
    } else {
      nowVideo += 1
    }

    this.setState(prevState => {
      return {
        selectedVideo: prevState.videos[nowVideo],
        nowVideo: nowVideo,
        autoplay: 1
      }
    })
  }

  shuffleVideosHandler = () => {
    const videos = [...this.state.videos]

    videos.sort(() => 0.5 - Math.random())

    this.setState({
      videos
    })
  }

  render() {
    if (!this.state.selectedVideo) return <Loader />

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: this.state.autoplay
      }
    }

    return (
      <div className="ui container grid">
        <div className="eleven wide column">
          <div className="ui segment">
            {!this.state.loaded ? <Loader /> : null}

            <YouTube
              opts={opts}
              videoId={this.state.selectedVideo.id.videoId}
              onReady={() => this.setState({ loaded: true })}
              onEnd={this.nextVideo}
            />

            <div
              className="ui segment centered grid"
              style={{ paddingTop: '5px', paddingBottom: '5px' }}
            >
              <button
                className="ui button blue large"
                onClick={this.deleteVideoHandler}
              >
                Delete
              </button>
              <button
                className="ui button red large"
                onClick={this.shuffleVideosHandler}
              >
                Shuffle
              </button>
            </div>
          </div>
        </div>

        <div className="five wide column">
          <Videos
            videos={this.state.videos}
            selectVideo={this.selectVideoHandler}
          />
        </div>
      </div>
    )
  }
}

export default Library
