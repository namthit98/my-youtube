import React, { Component } from 'react'
import YouTube from 'react-youtube'

import Video from '../../models/Video'
import Loader from '../Loader/Loader'

class VideoIframe extends Component {
  state = {
    loaded: false,
  }

  addToLibrary = () => {
    const check = Video.add(this.props.video)

    if(check) this.props.showToast('Add to list successfully !', 'green')

    else this.props.showToast('This video is existing !', 'red')
  }

  render() {
    const { video, autoplay } = this.props

    if (!video) return <h1>Select Video, please</h1>

    const opts = {
      playerVars: {
        autoplay
      }
    }

    return (
      <div className="ui segment">
        <div className="ui embed">
          {!this.state.loaded ? <Loader /> : null}

          <YouTube
            videoId={video.id.videoId}
            opts={opts}
            onReady={() => this.setState({ loaded: true })}
          />
        </div>
        <div
          className="ui segment centered grid"
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
        >
        <button className="ui button green large" onClick={this.addToLibrary}>Add To Library</button>
        </div>
      </div>
    )
  }
}

export default VideoIframe
