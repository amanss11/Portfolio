import AboutCard from '../components/AboutCard'

function About() {
    return (
        <div className="space-y-10">

            <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-white mb-4">About Me</h1>
                <p className="text-gray-300 mb-4 leading-relaxed text">
                    I’m Aman Shaikh, a final-year B.E. Information Technology student at the International Institute of Information Technology, with a strong focus on modern web development.
                    I work primarily with React, Tailwind, Node.js, and MongoDB and emphasize clean UI, responsive design, and performance.
                    I’m actively seeking an internship or entry-level software development role where I can apply my skills, contribute to impactful projects, and grow as a developer.
                </p>
            </section>

            <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-white mb-6">What I’m Doing</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <AboutCard
                        icon="💻"
                        title="Frontend Development"
                        description="Building clean, responsive UIs using React.js and Tailwind CSS."
                    />
                    <AboutCard
                        icon="🛠️"
                        title="Backend Development"
                        description="Building RESTful APIs and handling server-side logic using Node.js and Express, with experience in databases like MongoDB and MySQL."
                    />
                    <AboutCard
                        icon="🚀"
                        title="Project Building"
                        description="Applying concepts through real-world projects focused on functionality and design."
                    />
                    <AboutCard
                        icon="🎯"
                        title="Career Preparation"
                        description="Preparing for interviews and actively seeking entry-level opportunities to grow."
                    />
                </div>
            </section>

            
        </div>
    )
}

export default About;
