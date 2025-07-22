import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projects = [
        {
            title: "CricIQ",
            description: "A cricket trivia game featuring 50 progressive levels with real-time feedback and score tracking. Players can test their cricket knowledge while advancing through increasingly challenging questions.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Swiper.js"],
            githubLink: "https://github.com/amanss11/CricIQ",
            liveLink: "https://criciq-g87c.onrender.com/",
            image: "/project-images/criciq.png"
        },
        {
            title: "BookCycle",
            description: "A platform for buying and selling second-hand books locally. Features include searchable categorized listings and real-time communication between buyers and sellers.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO", "Cloudinary"],
            githubLink: "https://github.com/amanss11/BookCycle",
            liveLink: "https://book-cycle.vercel.app/",
            image: "/project-images/bookcycle.png"
        },
        {
            title: "All-in-one Mini Projects",
            description: "A collection of simple, functional mini web applications bundled into a single interface with user-friendly navigation. ",
            technologies: ["React.js", "TailwindCSS"],
            githubLink: "https://github.com/amanss11/All-in-one-mini-projects",
            liveLink: "https://all-in-one-mini-projects.vercel.app/",
            image: "/project-images/mini-projects.png"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;