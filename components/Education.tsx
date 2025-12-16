export default function Education() {
    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">
                Formação
            </h2>
            <div className="space-y-6">
                <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                    <h3 className="text-xl font-bold text-white mb-1">Engenharia de Software</h3>
                    <p className="text-blue-400 font-medium mb-2">Cursando</p>
                    <p className="text-gray-400 text-sm">Foco em desenvolvimento de sistemas escaláveis, arquitetura de software e boas práticas de engenharia.</p>
                </div>

                <div className="bg-gray-900/50 border-l-4 border-gray-600 p-6 rounded-r-xl">
                    <h3 className="text-xl font-bold text-white mb-1">Análise e Desenvolvimento de Sistemas</h3>
                    <p className="text-gray-400 font-medium mb-2">Concluído</p>
                    <p className="text-gray-400 text-sm">Base sólida em lógica de programação, banco de dados e desenvolvimento web.</p>
                </div>
            </div>
        </section>
    );
}
