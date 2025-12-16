import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Task Manager",
            description: "Aplicação web para gerenciamento de tarefas pessoais (CRUD) com persistência local.",
            techs: ["React", "CSS Modules", "LocalStorage"],
            learnings: ["Gerenciamento de estado", "Persistência no navegador", "Componentização"],
            github: "https://github.com/adeildocunha/task-manager"
        },
        {
            title: "Landing Page Institucional",
            description: "Página responsiva para apresentação de serviços, focada em performance e SEO.",
            techs: ["HTML5", "CSS3", "JavaScript"],
            learnings: ["Design responsivo", "HTML Semântico", "Manipulação do DOM"],
            github: "https://github.com/adeildocunha/landing-page"
        },
        {
            title: "API de Usuários",
            description: "API RESTful para cadastro e consulta de usuários.",
            techs: ["Node.js", "Express", "SQL (SQLite)"],
            learnings: ["Rotas e Controllers", "Consultas SQL", "Versionamento de backend"],
            github: "https://github.com/adeildocunha/api-users"
        }
    ];

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">
                Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Ver no GitHub"
                            >
                                <Github size={20} />
                            </a>
                        </div>

                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techs.map((tech) => (
                                <span key={tech} className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="border-t border-gray-800 pt-4 mt-auto">
                            <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">Aprendizados:</p>
                            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                                {project.learnings.map((learning) => (
                                    <li key={learning}>{learning}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
