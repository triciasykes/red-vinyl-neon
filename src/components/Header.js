import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    console.log(open)
    setOpen((prev) => !prev)
  }
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Songlist", link: "/songs" },
    { title: "Video", link: "/video" },
    { title: "Shows", link: "/shows" },
    { title: "Contact", link: "/contact" },
  ]
  return (
    <header>
      <section className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h2 className="text-2xl font-bold band-name sm-text-5xl mb-6">
          <a href="mailto:redvinyl45@gmail.com" className="mailto">
            redvinyl45@gmail.com
          </a>
        </h2>
        <nav
          className="hidden md:flex space-x-8 text-xl band-name"
          aria-label="main"
        >
          {navLinks.map((item, index) => {
            return (
              <Link
                to={item.link}
                className="link transistion-all duration-350 hover:opacity-30"
                key={index}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="-mr-2 flex md:hidden">
          <button
            typye="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text0gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-offset-gray-800 focus:ring-white"
          >
            {open === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </section>
      {open ? (
        <section className="md:hidden">
          <nav
            className="ox-2 pt-2 pb-3 space-y-1 sm:px-3 band-name justify-center"
            aria-label="mobile"
          >
            {navLinks.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="text-white  transition-all duration-500 hover:bg-gray-600 hover:text-[#E93838] px-3 py-2 rounded-md text-md font-medium"
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </section>
      ) : null}
    </header>
  )
}

export default Header
