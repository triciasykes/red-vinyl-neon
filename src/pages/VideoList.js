import React from "react"
import Video from "../components/Video"

const VideoList = ({ videoData }) => {
  console.log(videoData)
  return (
    <div className="p-6 scroll-mt-40">
      <h2 className="text-4xl font-bold text-center sm-text-5xl mb-6 section-name">
        Video
      </h2>
      <div className="flex flex-col-2 flex-wrap gap-8 justify-center items-center">
        {videoData.map((vid) => {
          return <Video vid={vid} />
        })}
      </div>
    </div>
  )
}

export default VideoList
