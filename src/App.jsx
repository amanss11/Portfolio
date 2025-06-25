import './App.css'
import Sidebar from './components/Sidebar'


function App() {
  
  return (
    <>
      <div className="flex bg-black text-white min-h-screen">
        <div className="w-1/4 bg-gray-900">
        <Sidebar></Sidebar>
        </div>
      </div>
    </>
  )
}

export default App
