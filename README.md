
# 🌐 ExplicaConecta

**ExplicaConecta** é uma plataforma educativa inovadora que conecta estudantes a explicadores qualificados de forma rápida, segura e personalizada. Criada para facilitar o reforço escolar e o acompanhamento académico em diversas disciplinas, a ExplicaConecta é a ponte entre quem quer aprender e quem está pronto para ensinar.

> 📚 **Slogan:** Aprende mais, conectado a quem sabe.

---

## 🚀 Funcionalidades

- Cadastro de explicadores
- Formulários personalizados para estudantes solicitarem explicações
- Gestão de propostas empresariais para formações
- Sistema moderno de formulários dinâmicos
- Planeamento para aulas online, cursos de inglês, informática e programação
- Integração futura com pagamentos via carteiras móveis e bancos moçambicanos

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** React.js (Vite) + Tailwind CSS
- **Back-end:** Node.js + Express (em transição para Python/Flask)
- **Base de Dados:** MongoDB com Prisma ORM
- **Deploy:** Vercel (frontend) | Docker + API REST (em desenvolvimento)
- **Outras:** Git, GitHub, Postman, ESLint, etc.

---

## 📁 Estrutura do Projeto

```bash
explicaconecta/
│
├── /src
│   ├── /components      # Componentes reutilizáveis
│   ├── /pages           # Páginas (Home, Cadastro, Formulários)
│   ├── /hooks           # Custom hooks
│   ├── /utils           # Funções auxiliares
│   └── /styles          # Ficheiros de estilo (Tailwind)
│
├── /server              # API backend com Express ou Flask
│   ├── /routes
│   ├── /controllers
│   └── /models          # Prisma + MongoDB
│
├── /docs                # Documentação do projeto
├── .env.example         # Exemplo de variáveis de ambiente
├── README.md
└── Dockerfile           # Dockerização futura

Como executar localmente
Pré-requisitos
Node.js v18+

MongoDB Atlas ou local
Yarn ou npm
Docker (opcional)
Vite instalado globalmente (opcional)

# Clone o repositório
git clone https://github.com/teu-usuario/explicaconecta.git
cd explicaconecta

# Instalar dependências
cd frontend
npm install

# Rodar frontend
npm run dev

# Executar backend (em outra aba)
cd ../server
npm install
npm run dev


Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.

Para contribuir:
Fork este repositório
Crie uma branch (git checkout -b feature/nova-funcionalidade)
Faça commit das suas alterações (git commit -m 'feat: nova funcionalidade')
Faça push da branch (git push origin feature/nova-funcionalidade)
Abra um Pull Request

📄 Licença
Este projeto encontra-se sob a Licença MIT.

📞 Contacto e Redes
Criado por Mauro Venancio Chemane

🇲🇿 Moçambique
🌐 explicaconecta.com
📧 explicaconecta@gmail.com
📱 Instagram: @explicaconecta
👨‍💻 GitHub: @teu-usuario

