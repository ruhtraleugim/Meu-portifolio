import { projects } from "@/data/projects";
import { ArrowRight, Github } from 'lucide-react';
import Link from "next/link";

export default function Projects() {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-2">
                <h2 className="text-2xl font-bold text-white">
                    Projetos
                </h2>
                <span className="text-sm text-gray-500 hidden md:block">
                    Role para ver mais &rarr;
                </span>
            </div>

            {/* Carousel Container */}
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        className="min-w-[85vw] md:min-w-[400px] snap-center bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
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

                        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techs.slice(0, 3).map((tech) => (
                                <span key={tech} className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                            {project.techs.length > 3 && (
                                <span className="text-xs text-gray-500 px-2 py-1">+{project.techs.length - 3}</span>
                            )}
                        </div>

                        <Link
                            href={`/projects/${project.slug}`}
                            className="mt-auto w-full py-2 flex items-center justify-center text-sm font-medium text-white bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors"
                        >
                            Ver Detalhes <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                ))}

                {/* Placeholder for future projects */}
                <div className="min-w-[85vw] md:min-w-[400px] snap-center bg-gray-900/30 border border-dashed border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-gray-500 font-medium mb-2">Em breve</p>
                    <p className="text-sm text-gray-600">Novos projetos estão sendo desenvolvidos...</p>
                </div>
            </div>
        </section>
    );
}
