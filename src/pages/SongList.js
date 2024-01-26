import React from "react"

import songs from "../songs"
import Song from "../components/Song"

const SongList = () => {
  const col1Songs = songs.filter((song, index) => index < 16)
  const col2Songs = songs.filter((song, index) => index > 16)
  return (
    <div className="p-6 scroll-mt-40">
      <h2 className="text-4xl font-bold text-center sm-text-5xl mb-6 section-name">
        Song List
      </h2>
      <div className="grid grid-col-2 grid-flow-col gap-4 flex-wrap">
        <div className="bg-red-500 text-white ps-8 py-7 rounded-md">
          {col1Songs.map((song, index) => {
            return <Song song={song} index={index} />
          })}
        </div>
        <div className="bg-red-500 text-white ps-8 py-7 rounded-md">
          {col2Songs.map((song, index) => {
            return <Song song={song} index={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SongList
