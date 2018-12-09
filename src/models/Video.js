class Video {
  constructor() {
    this.name = 'videos'
  }

  static load() {
    return JSON.parse(localStorage.getItem(this.name)) || []
  }

  static add(video) {
    const videos = JSON.parse(localStorage.getItem(this.name)) || []

    const check = videos.some(v => v.id.videoId === video.id.videoId)

    if (check) return false

    videos.push(video)

    localStorage.setItem(this.name, JSON.stringify(videos))

    return true
  }

  static remove(videoIndex) {
    const videos = JSON.parse(localStorage.getItem(this.name)) || []

    videos.splice(videoIndex, 1)

    localStorage.setItem(this.name, JSON.stringify(videos))
  }
}

export default Video
