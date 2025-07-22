import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, description, technologies, githubLink, liveLink, image }) {
    return (
        <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 relative before:absolute before:inset-0 before:border-2 before:border-yellow-500/30 before:rounded-xl">
            {/* Project Image */}
            <div className="h-48 overflow-hidden relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                        <span>Live</span>
                        <FaExternalLinkAlt className="text-xs" />
                    </a>
                )}
            </div>

            {/* Project Info */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
                        >
                            <FaGithub className="text-xl" />
                            <span className="text-sm">Code</span>
                        </a>
                    )}
                </div>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-[#2A2A2A] text-yellow-500 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
