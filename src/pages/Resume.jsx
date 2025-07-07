function Resume() {
    return (
        <div className="space-y-10">
            {/* Top grid: Education and Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education Column */}
                <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-md h-fit">
                    <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
                    <div className="space-y-6">
                        <div className="bg-[#1e1e1e] p-5 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-semibold text-white mb-1">B.E. Information Technology</h3>
                            <p className="text-gray-400">International Institute of Information Technology, Pune</p>
                            <p className="text-gray-400 text-sm">2021 - 2025 &bull; CGPA: 7.58</p>
                        </div>
                        <div className="bg-[#1e1e1e] p-5 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-semibold text-white mb-1">Senior Secondary Education</h3>
                            <p className="text-gray-400">Symbiosis Junior College, Kiwale</p>
                            <p className="text-gray-400 text-sm">2019 - 2021 &bull; Percentage: 87.17%</p>
                        </div>
                    </div>
                </section>
                {/* Certifications Column */}
                <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-md h-fit">
                    <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
                    <div className="space-y-6">
                        <div className="bg-[#1e1e1e] p-5 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-semibold text-white mb-1">Full-Stack Web Development</h3>
                            <p className="text-gray-400">Dr. Angela Yu, Udemy</p>
                            <p className="text-gray-400 text-sm">2023</p>
                        </div>
                        <div className="bg-[#1e1e1e] p-5 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-semibold text-white mb-1">Cloud Foundations</h3>
                            <p className="text-gray-400">AWS Academy</p>
                            <p className="text-gray-400 text-sm">2024</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Skills Section: single card, each row a skill category */}
            <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
                <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700 space-y-4">
                    {/* Programming Languages */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="w-52 text-white font-semibold">Programming Languages:</span>
                        <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                            <span className="bg-[#232323] px-3 py-1 rounded">Core Java</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">JavaScript</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">C++</span>
                        </div>
                    </div>
                    {/* Frontend Development */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="w-52 text-white font-semibold">Frontend Development:</span>
                        <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                            <span className="bg-[#232323] px-3 py-1 rounded">React.js</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">HTML5</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">CSS3</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">Tailwind CSS</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">Bootstrap</span>
                        </div>
                    </div>
                    {/* Backend Development */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="w-52 text-white font-semibold">Backend Development:</span>
                        <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                            <span className="bg-[#232323] px-3 py-1 rounded">Node.js</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">Express.js</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">RESTful APIs</span>
                        </div>
                    </div>
                    {/* Database Management */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="w-52 text-white font-semibold">Database Management:</span>
                        <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                            <span className="bg-[#232323] px-3 py-1 rounded">MongoDB</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">MySQL</span>
                        </div>
                    </div>
                    {/* Version Control */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="w-52 text-white font-semibold">Version Control:</span>
                        <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                            <span className="bg-[#232323] px-3 py-1 rounded">Git</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">Github</span>
                        </div>
                    </div>
                    {/* Development Tools */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="w-52 text-white font-semibold">Development Tools:</span>
                        <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                            <span className="bg-[#232323] px-3 py-1 rounded">VS Code</span>
                            <span className="bg-[#232323] px-3 py-1 rounded">Postman</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume;