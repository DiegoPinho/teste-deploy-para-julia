# Julia Becho - Portfolio

Um portfólio moderno e responsivo construído com React, Vite e integrado com Netlify Forms.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool rápida para desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Netlify Forms** - Para envio de mensagens do formulário de contato
- **SweetAlert2** - Para notificações elegantes
- **React Router Dom** - Para roteamento de páginas

## 📋 Funcionalidades

- ✨ Design responsivo e moderno
- 🌙 Toggle de tema (dark/light mode)
- 📧 Formulário de contato integrado com Netlify Forms
- 🎨 Animações e efeitos visuais
- 📱 Otimizado para dispositivos móveis

## 🛠️ Instalação e Desenvolvimento

1. Clone o repositório:
```bash
git clone https://github.com/JuliaBecho/Portfolio.git
cd Portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em modo de desenvolvimento:
```bash
npm run dev
```

4. Para fazer o build de produção:
```bash
npm run build
```

## 🌐 Deploy na Netlify

### Opção 1: Deploy Automático via Git

1. Faça push do código para seu repositório GitHub
2. Acesse [netlify.com](https://netlify.com) e faça login
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub
5. Configure as opções de build (já configuradas no `netlify.toml`):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clique em "Deploy site"

### Opção 2: Deploy Manual

1. Execute o build:
```bash
npm run build
```

2. Acesse [netlify.com](https://netlify.com) e arraste a pasta `dist` para a área de deploy

## 📧 Configuração do Formulário de Contato

O formulário de contato está configurado para usar **Netlify Forms**. Após o deploy:

1. Acesse o painel da Netlify
2. Vá em "Forms" no menu lateral
3. Você verá o formulário "contact" listado
4. Configure notificações por email se desejar
5. Visualize as mensagens recebidas

### Características do Formulário:

- ✅ Validação client-side
- ✅ Proteção contra spam (honeypot)
- ✅ Notificações com SweetAlert2
- ✅ Reset automático após envio
- ✅ Integração nativa com Netlify

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── App.jsx          # Componente principal
│   ├── Contact.jsx      # Formulário de contato
│   ├── Header.jsx       # Cabeçalho
│   ├── Nav.jsx          # Navegação
│   └── ...
├── pages/               # Páginas da aplicação
├── contexts/            # Context API
├── assets/              # Imagens e recursos
└── lib/                 # Utilitários
```

## 🔧 Configurações

- `netlify.toml` - Configurações de build e redirects
- `public/_redirects` - Redirects para SPA
- `vite.config.js` - Configurações do Vite

## 👩‍💻 Contato

- **Email**: juliabecho@gmail.com
- **Telefone**: +1 (778) 246-5707
- **Localização**: Vancouver, BC, Canada

---

Desenvolvido com ❤️ por [Julia Becho](https://github.com/JuliaBecho)
