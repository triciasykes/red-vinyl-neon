import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import SongList from "./pages/SongList"
import Video from "./pages/Video"
import Show from "./pages/Show"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

import "./App.css"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/video" element={<Video />} />
        <Route path="/shows" element={<Show />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
