export default function TechStack() {
    const skills = [
        "HTML5", "CSS3", "JavaScript", "React", "Next.js",
        "Node.js", "SQL", "Git", "GitHub", "Figma", "Tailwind CSS"
    ];

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">
                Tecnologias
            </h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg font-medium border border-gray-700 hover:border-blue-500 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
