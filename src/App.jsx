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
      <div className="flex h-screen overflow-hidden bg-black text-white p-4 gap-4">

        <div className="w-1/4 bg-[#1e1e1e] rounded-xl shadow-md p-4">
          <Sidebar />
        </div>

        <div className="w-3/4 flex flex-col h-full bg-[#1e1e1e] rounded-xl overflow-hidden">
          <Navbar />

          <div className="flex-1 overflow-y-auto px-8 py-6">
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
