import { NavLink } from 'react-router-dom'

function Navbar() {
    const tabs = ['about', 'resume', 'projects']

    return (
        <nav className="sticky top-0 bg-[#181818] z-10 px-8 py-4 shadow-sm rounded-t-xl border-gray-700">
            <ul className="flex gap-8 text-sm font-medium">
                {tabs.map(tab => (
                    <NavLink
                        key={tab}
                        to={`/${tab}`}
                        className={({ isActive }) =>
                            `capitalize tracking-wide transition ${isActive
                                ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
                                : 'text-gray-300 hover:text-yellow-400'
                            }`
                        }
                    >
                        {tab}
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
