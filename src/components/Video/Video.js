import React from 'react'
import classes from './Video.module.css'

const Video = props => {
  const { video, clicked } = props

  const selectVideo = () => {
    clicked(video)
  }

  return (
    <div className={classes.Video + ' item'} onClick={selectVideo}>
      <img
        className="ui image"
        alt="Hello"
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default Video
