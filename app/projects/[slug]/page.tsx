import { projects } from "@/data/projects";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Voltar para o início
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techs.map((tech) => (
                        <span key={tech} className="text-sm text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="prose prose-invert prose-lg max-w-none mb-12">
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4">
                        {project.description}
                    </p>

                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>

                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold mb-4 text-white">Principais Aprendizados</h3>
                    <ul className="space-y-2">
                        {project.learnings.map((learning, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                {learning}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                    >
                        <Github className="mr-2" />
                        Ver código no GitHub
                    </a>
                </div>
            </div>
        </main>
    );
}
