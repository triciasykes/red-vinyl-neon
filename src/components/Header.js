import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-red-500 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <NavLink to="/"> RED VINYL 45</NavLink>
        </h1>
        <button
          id="mobile-open-button"
          className="text-3xl sm:hidden focus:outline-none"
        >
          &#9776
        </button>
        <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
          <NavLink to="/songs" class="link hover:opacity-30">
            Song List
          </NavLink>
          <NavLink to="/video" class="link hover:opacity-30">
            Video
          </NavLink>
          <NavLink to="/shows" class="link hover:opacity-30">
            Shows
          </NavLink>
          <NavLink to="/contact" class="link hover:opacity-30">
            Contact Us
          </NavLink>
        </nav>
      </section>
    </header>
  )
}

export default Header
