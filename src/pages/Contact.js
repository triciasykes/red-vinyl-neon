import React from "react"

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
        <div className="card">
          <img
            src="krista.png"
            alt="Krista, Lead Vocals"
            className="w-full h-64 object-cover"
          />
          <div className="container">
            <h4>
              <b>Krista</b>
            </h4>
            <p>Lead Vocals</p>
          </div>
        </div>
        <div className="card">
          <img
            src="adrian.png"
            alt="Adrian, Guitar"
            className="w-full h-64 object-cover"
          />
          <div className="container">
            <h4>
              <b>Adrian</b>
            </h4>
            <p>Lead Guitar, Vocals</p>
          </div>
        </div>
        <div className="card">
          <img
            src="derek.png"
            alt="Derek, Bass"
            className="w-full h-64 object-cover"
          />
          <div className="container">
            <h4>
              <b>Derek</b>
            </h4>
            <p>Bass Guitar</p>
          </div>
        </div>
        <div className="card">
          <img
            src="alex.png"
            alt="Alex, Drums"
            className="w-full h-64 object-cover"
          />
          <div className="container">
            <h4>
              <b>Alex</b>
            </h4>
            <p>Drums</p>
          </div>
        </div>
        <div className="card">
          <img
            src="trish.png"
            alt="Trish, Keys"
            className="w-full h-64 object-cover"
          />
          <div className="container">
            <h4>
              <b>Tricia</b>
            </h4>
            <p>Keyboards</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
