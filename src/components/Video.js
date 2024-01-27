import React from "react"
import YouTube from "react-youtube"

const Video = ({ vid }) => {
  const options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  }

  return <YouTube videoId={vid.videoId} options={options} id={vid.id} />
}

export default Video
