import React from "react"

import logo from "../assets/red-vinyl-45-logo-transparent.png"

const Home = () => {
  return (
    <main className="max-w-4xl mx-auto flex justify-center items-center mt-20">
      <img src={logo} alt="Red Vinyl Logo" class="w-1/2 animate-slow-spin" />
    </main>
  )
}

export default Home
