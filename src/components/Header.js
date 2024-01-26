import { Link } from "react-router-dom"
import logo from "../assets/red-vinyl-45-logo-transparent-sm.png"

const Header = () => {
  return (
    <header className="text-white  z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-center items-center">
        <button
          id="mobile-open-button"
          className="text-3xl sm:hidden focus:outline-none"
        >
          &#9776;
        </button>
        <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
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
    </header>
  )
}

export default Header
