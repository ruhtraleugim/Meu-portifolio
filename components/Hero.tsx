import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Adeildo Cunha dos Santos
      </h1>
      <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-2">
        Estagiário / Trainee / Desenvolvedor Júnior
      </h2>
      <p className="text-gray-400 mb-8">São Paulo – SP</p>
      
      <div className="flex gap-4">
        <a 
          href="https://github.com/adeildocunha" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/adeildocunha" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="mailto:contato@adeildo.dev" 
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
}
