import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="text-white  z-10">
      <section className="max-w-4xl mx-auto p-4 justify-center items-center origin-top animate-open-menu md:hidden">
        <button
          id="hamburger-button"
          className="text-3xl md:hidden cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          &#9776;
        </button>
        <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
          <Link to="/" className="link hover:opacity-30">
            Home
          </Link>
          <Link to="/songs" className="link hover:opacity-30">
            Song List
          </Link>
          <Link to="/videos" className="link hover:opacity-30">
            Video
          </Link>
          <Link to="/shows" className="link hover:opacity-30">
            Shows
          </Link>
          <Link to="/contact" className="link hover:opacity-30">
            Contact Us
          </Link>
        </nav>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-0 bg-black w-full text-5xl flex flex-col justify-content-center"
      >
        <button className="text-8xl self-end px-6">&times;</button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <Link to="/" className="w-full text-center py-6 hover:opacity-90">
            Home
          </Link>
          <Link
            to="/songs"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Song List
          </Link>
          <Link
            to="/videos"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Video
          </Link>
          <Link
            to="/shows"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Shows
          </Link>
          <Link
            to="/contact"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Contact Us
          </Link>
        </nav>
      </section>
    </header>
  )
}

export default Header
