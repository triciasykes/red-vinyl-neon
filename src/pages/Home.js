import React from "react"

const Home = () => {
  return (
    <main
      id="home"
      className="max-w-4xl mx-auto flex justify-center flex-col items-center py-40 scroll-mt-40"
    >
      <div className="neon">
        <span className="delay1">R</span>ED VIN
        <span className="delay2">Y</span>L <span className="delay3">45</span>
      </div>
      <div className="pt-20">
        <h2 className="text-2xl font-bold  text-center sm-text-5xl mb-6">
          <a href="mailto:redvinyl45@gmail.com" className="mailto">
            redvinyl45@gmail.com
          </a>
        </h2>
      </div>
    </main>
  )
}

export default Home
