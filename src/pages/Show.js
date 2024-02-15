import React from "react"

import shows from "../showData"

function Show() {
  return (
    <div className="p-6 scroll-mt-40">
      <h2 className="text-xl font-bold text-center sm-text-5xl mb-6 section-name">
        Upcoming Shows
      </h2>
      <ul className="list none mx-auto my-12 flex flex-wrap flex-col-sm:flex-row justify-center items-center gap-8">
        {shows.map((show, index) => {
          return (
            <li
              key={index}
              className="w-[48%] sm:w-[48%] flex flex-col  text-xl items-center border border-solid border-white p-4"
            >
              <a href={show.link}> {show.location}</a>
              {show.date} {show.time}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Show
