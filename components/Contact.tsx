import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-16 px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2 inline-block">
                Contato
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Estou disponível para oportunidades de estágio, trainee ou vaga júnior.
                Entre em contato para conversarmos sobre como posso contribuir com sua equipe.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                    href="mailto:contato@adeildo.dev"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all group"
                >
                    <div className="p-2 bg-gray-800 rounded-full group-hover:bg-blue-900/30 transition-colors">
                        <Mail size={24} />
                    </div>
                    <span className="font-medium">contato@adeildo.dev</span>
                </a>

                <a
                    href="https://linkedin.com/in/adeildocunha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all group"
                >
                    <div className="p-2 bg-gray-800 rounded-full group-hover:bg-blue-900/30 transition-colors">
                        <Linkedin size={24} />
                    </div>
                    <span className="font-medium">LinkedIn</span>
                </a>

                <a
                    href="https://github.com/adeildocunha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all group"
                >
                    <div className="p-2 bg-gray-800 rounded-full group-hover:bg-blue-900/30 transition-colors">
                        <Github size={24} />
                    </div>
                    <span className="font-medium">GitHub</span>
                </a>
            </div>
        </section>
    );
}
