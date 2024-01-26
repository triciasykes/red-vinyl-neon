import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Home from "./pages/Home"
import Show from "./pages/Show"
import SongList from "./pages/SongList"
import VideoList from "./pages/VideoList"
import videoData from "./videoData"

import "./App.css"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/videos" element={<VideoList videoData={videoData} />} />
        <Route path="/shows" element={<Show />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
