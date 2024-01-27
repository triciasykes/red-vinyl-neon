import React from "react"
import shows from "../showData"

function Show() {
  return (
    <div className="p-6 scroll-mt-40">
      <h2 className="text-xl font-bold text-center sm-text-5xl mb-6 section-name">
        Upcoming Shows
      </h2>
      <ul class="list none mx-auto my-12 flex flex-col-sm:flex-row justify-center items-center gap-8">
        {shows.map((show, index) => {
          return (
            <li className="w-2/3 sm:w-5/6 flex flex-col text-xl items-center border border-solid border-white">
              {show.location} - - - {show.date}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Show
