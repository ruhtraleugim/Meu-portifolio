export interface Project {
    slug: string;
    title: string;
    description: string;
    techs: string[];
    learnings: string[];
    github: string;
    content: string; // HTML or Markdown content for the details page
}

export const projects: Project[] = [
    {
        slug: "task-manager",
        title: "Task Manager",
        description: "Aplicação web para gerenciamento de tarefas pessoais (CRUD) com persistência local.",
        techs: ["React", "CSS Modules", "LocalStorage"],
        learnings: ["Gerenciamento de estado com Hooks", "Persistência de dados no navegador", "Componentização e reutilização"],
        github: "https://github.com/adeildocunha/task-manager",
        content: `
      <p>O <strong>Task Manager</strong> foi desenvolvido para resolver a necessidade de organização diária de tarefas de forma simples e rápida, sem necessidade de login ou backend complexo.</p>
      <h3>Funcionalidades Principais</h3>
      <ul>
        <li>Adicionar novas tarefas com prioridade.</li>
        <li>Marcar tarefas como concluídas.</li>
        <li>Filtrar tarefas (todas, pendentes, concluídas).</li>
        <li>Persistência automática no LocalStorage do navegador.</li>
      </ul>
      <h3>Desafios Técnicos</h3>
      <p>O principal desafio foi gerenciar o estado da aplicação de forma eficiente para garantir que a interface reagisse instantaneamente às ações do usuário, mantendo a sincronia com o LocalStorage.</p>
    `
    },
    {
        slug: "landing-page",
        title: "Landing Page Institucional",
        description: "Página responsiva para apresentação de serviços, focada em performance e SEO.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        learnings: ["Design responsivo (Mobile First)", "HTML Semântico para SEO", "Manipulação do DOM para interatividade"],
        github: "https://github.com/adeildocunha/landing-page",
        content: `
      <p>Este projeto simula a presença digital de uma empresa moderna. O foco foi criar uma experiência visualmente agradável e extremamente performática.</p>
      <h3>Destaques</h3>
      <ul>
        <li>Pontuação 100/100 no Google Lighthouse.</li>
        <li>Layout totalmente responsivo usando CSS Grid e Flexbox.</li>
        <li>Animações sutis ao rolar a página (Scroll Reveal).</li>
      </ul>
    `
    },
    {
        slug: "api-users",
        title: "API de Usuários",
        description: "API RESTful para cadastro e consulta de usuários.",
        techs: ["Node.js", "Express", "SQL (SQLite)"],
        learnings: ["Estruturação de rotas e Controllers", "Consultas SQL seguras", "Versionamento de API"],
        github: "https://github.com/adeildocunha/api-users",
        content: `
      <p>Uma API robusta construída com Node.js e Express para gerenciar usuários. Este projeto serviu como base para entender o funcionamento do backend e a comunicação cliente-servidor.</p>
      <h3>Arquitetura</h3>
      <p>O projeto segue o padrão MVC (Model-View-Controller) adaptado para APIs, garantindo separação de responsabilidades e facilidade de manutenção.</p>
      <ul>
        <li>Validação de dados de entrada.</li>
        <li>Tratamento de erros centralizado.</li>
        <li>Integração com banco de dados SQLite.</li>
      </ul>
    `
    }
];
