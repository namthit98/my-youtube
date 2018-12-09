import React from 'react'

import classes from './Videos.module.css'

import Video from '../Video/Video'

const Videos = props => {
  const { videos, selectVideo } = props

  const listVideos = videos.map(video => (
    <Video key={video.id.videoId} video={video} clicked={selectVideo} />
  ))

  return (
    <div className={classes.Videos + ' ui list divided segment'}>
      {listVideos}
    </div>
  )
}

export default Videos
