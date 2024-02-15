import React from "react"

import Song from "../components/Song"
import songs from "../songs"

const SongList = () => {
  const col1Songs = songs
    .filter((song, index) => index < 16)
    .sort((a, b) => a.artist)
  const col2Songs = songs.filter((song, index) => index > 16)
  return (
    <div className="p-6 scroll-mt-40">
      <h2 className="text-4xl font-bold text-center sm-text-5xl mb-6 section-name">
        Song List
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-[48%] lg:w-[48%] bg-red-500 text-white ps-8 p-6 rounded-md mb-4">
          {col1Songs.map((song, index) => {
            return <Song song={song} index={index} key={index} />
          })}
        </div>
        <div className="w-full md:w-[48%] lg:w-[48%] bg-red-500 text-white ps-8 p-6 rounded-md mb-4">
          {col2Songs.map((song, index) => {
            return <Song song={song} index={index} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SongList
