# Portfólio Profissional — Rodrigo Rego de Lima

[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![NestJS](https://img.shields.io/badge/NestJS-11.0-E0234E?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Portfólio moderno, ultra-rápido e de alta performance desenvolvido com arquitetura monorepo **Full-Stack 100% em TypeScript**:
- **Frontend:** [Astro 5](https://astro.build/) com componentes tipados, modo Dark/Light, terminal interativo CLI e visualizador embutido de currículo em PDF.
- **Backend:** [NestJS 11](https://nestjs.com/) com validação estrita via DTOs (`class-validator`), endpoints REST e integração de contatos.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Framework:** Astro 5 (Static / Islands)
- **Linguagem:** TypeScript
- **Estilização:** CSS moderno com variáveis, glassmorphism e iluminação ambiente (sem emojis, 100% SVGs vetoriais)
- **Recursos:**
  - Terminal interativo (`rodrigo-cli`)
  - Filtro dinâmico por categoria de projetos
  - Seção integrada com preview de currículo em PDF e download
  - Cópia para clipboard com notificações toast
  - Integração com backend NestJS e fallback direto para WhatsApp

### Backend
- **Framework:** NestJS 11
- **Linguagem:** TypeScript
- **Validação:** `class-validator` e `class-transformer`
- **Módulos:**
  - `ContactModule`: `POST /api/contact` com sanitização e formatação de mensagem
  - `ProjectsModule`: `GET /api/projects` com listagem de projetos autorais
  - `HealthModule`: `GET /api/health` para monitoramento de disponibilidade

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 20+ ou 22 LTS
- npm

### 1. Instalar as dependências
```bash
# Na pasta frontend
cd frontend && npm install

# Na pasta backend
cd ../backend && npm install
```

### 2. Iniciar em Modo de Desenvolvimento
Na raiz do projeto:
```bash
npm run dev
```

Ou execute individualmente:
```bash
npm run dev:backend   # NestJS em http://localhost:3000/api
npm run dev:frontend  # Astro em http://localhost:4321
```

### 3. Build de Produção
```bash
npm run build
```

---

## 📄 Licença
Distribuído sob a licença MIT. Veja `LICENSE` para mais detalhes.
