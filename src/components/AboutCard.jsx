
function AboutCard({ icon, title, description }) {
    return (
        <div className="bg-[#1e1e1e] p-5 rounded-xl border border-gray-700 hover:border-amber-50 transition">
            <div className="text-yellow-400 text-xl mb-2">{icon}</div>
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    )
}

export default AboutCard;
  