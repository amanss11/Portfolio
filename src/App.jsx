import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  
  return (
    <>
      <div className="flex flex-col md:flex-row bg-black text-white p-2 md:p-4 gap-3 md:gap-5 md:h-screen">
        <div className="w-full md:w-1/4 bg-[#1e1e1e] rounded-xl shadow-md p-4 mb-3 md:mb-0">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 flex flex-col h-full bg-[#1e1e1e] rounded-xl overflow-visible md:overflow-hidden">
          <Navbar />
          <div className="flex-1 px-2 md:px-8 py-4 md:py-6 md:overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
