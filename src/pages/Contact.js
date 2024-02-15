import React from "react"
import band from "../bandData"

function Contact() {
  return (
    <div className="p-6 scroll-mt-40">
      <h2 className="text-4xl font-bold text-center sm-text-5xl mb-6 section-name">
        Contact Us
      </h2>
      <h2 className="text-2xl font-bold text-center sm-text-5xl mb-6">
        <a href="mailto:redvinyl45@gmail.com" className="mailto">
          redvinyl45@gmail.com
        </a>
      </h2>
      <section className="grid grid-col-5 grid-flow-col gap-4 mt-20">
        {band.map((name, index) => {
          return (
            <div className="card">
              <img
                src={name.img}
                alt={name.name}
                className="w-full h-64 object-cover"
              />
              <div className="container">
                <h4>
                  <b>{name.name}</b>
                </h4>
                <p>{name.role}</p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Contact
