import React from "react"

const Song = ({ song, index }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2">{song.name}</div>
      <div className="basis-1/2">{song.artist}</div>
    </div>
  )
}

export default Song
