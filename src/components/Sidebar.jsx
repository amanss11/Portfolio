import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'


function Sidebar() {
    return (
        <div className="flex flex-col items-center text-white p-6 space-y-6">

            <img
                src="/profile.jpg" 
                alt="Aman Shaikh"
                className="w-40 h-40 object-cover rounded-xl border-2 border-yellow-500 shadow-md"
            />

            <div className="text-center">
                <h2 className="text-xl font-bold">Aman Shaikh</h2>
                <p className="text-sm text-gray-400">Full Stack Web Developer</p>
            </div>

            
            <div className="flex flex-col w-full space-y-4 text-sm text-gray-300 items-center">

                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-yellow-500" />
                    <span className="text-white font-medium">Pune, Maharashtra</span>
                </div>

                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-yellow-500" />
                    <span className="text-white font-medium"> shaikhzams123@gmail.com</span>
                </div>

                <a
                    href="/resume.pdf"
                    download
                    className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                >
                    Download Resume
                </a>

            </div>

        
            <div className="flex items-start gap-4 text-2xl mt-18">
            <a
                href="https://github.com/amans11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
                <FaGithub />
                <span className="text-base">GitHub</span>
            </a>

            <a
                href="https://linkedin.com/in/aman-s-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
                <FaLinkedin />
                <span className="text-base">LinkedIn</span>
            </a>
        </div>

        </div>
    )
}

export default Sidebar
  