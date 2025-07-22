import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // Always open on desktop
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const showDetails = isDesktop || isOpen;

    return (
        <div className="flex flex-col items-center w-full p-4 md:mt-10 md:p-6 md:space-y-6 text-white">
            {/* Mobile: Collapsed header */}
            <div className="w-full flex md:hidden items-center justify-between">
                <div className="flex items-center gap-4 ml-5">
                    <img
                        src="/profile.jpeg"
                        alt="Aman Shaikh"
                        className="w-16 h-16 object-cover rounded-xl border-2 border-yellow-500 shadow-md"
                    />
                    <div>
                        <h2 className="text-lg font-bold">Aman Shaikh</h2>
                        <p className="text-xs text-gray-400">Full Stack Web Developer</p>
                    </div>
                </div>
                <button
                    className="ml-2 p-2 rounded-full hover:bg-[#232323] transition"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                >
                    {isOpen ? <FiChevronUp className="text-yellow-400 text-xl" /> : <FiChevronDown className="text-yellow-400 text-xl" />}
                </button>
            </div>

            {/* Desktop: Always show header, original spacing and layout */}
            <div className="hidden md:flex flex-col items-center space-y-6 w-full">
            <img
                src="/profile.jpeg"
                alt="Aman Shaikh"
                className="w-40 h-40 object-cover rounded-xl border-2 border-yellow-500 shadow-md"
            />
            <div className="text-center">
                <h2 className="text-xl font-bold">Aman Shaikh</h2>
                <p className="text-sm text-gray-400">Full Stack Web Developer</p>
            </div>
            </div>
            
            {/* Details: show on desktop or if open on mobile */}
            {showDetails && (
                <div className="w-full flex flex-col items-center space-y-6 mt-4 md:mt-0">
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
                            href="/AmanShaikhResume.pdf"
                    download
                    className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                >
                    Download Resume
                </a>
            </div>
                    <div className="flex items-start gap-4 text-2xl mt-2">
            <a
                href="https://github.com/amanss11"
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
            )}
        </div>
    );
}

export default Sidebar;
  