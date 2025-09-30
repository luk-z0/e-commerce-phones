# 📱 E-Commerce Phones

[![Nuxt
4](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License:
MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
<!-- [![Build](https://img.shields.io/github/actions/workflow/status/luk-z0/e-commerce-phones/ci.yml?branch=main&label=build)](https://github.com/luk-z0/e-commerce-phones/actions)
[![Tests](https://img.shields.io/github/actions/workflow/status/luk-z0/e-commerce-phones/tests.yml?label=tests)](https://github.com/luk-z0/e-commerce-phones/actions) -->

Aplicação de e-commerce de celulares construída com **Nuxt 4**,
utilizando módulos para otimização de imagens, internacionalização, UI e
integração com banco de dados via Prisma.

------------------------------------------------------------------------

## 🚀 Tecnologias

-   Nuxt 4
-   @nuxt/image --- otimização de imagens
-   @nuxt/ui --- biblioteca de componentes UI
-   @nuxtjs/i18n --- internacionalização
-   @prisma/nuxt --- ORM Prisma integrado ao Nuxt
-   @nuxt/test-utils --- utilitários de teste

------------------------------------------------------------------------

## 📂 Estrutura

```bash
.
├── app/           # Páginas, layouts e componentes
├── prisma/        # Esquema e migrações do Prisma
├── public/        # Arquivos estáticos
├── server/        # API / lógica de backend
├── nuxt.config.ts # Configuração principal do Nuxt
├── package.json
└── .env.example   # Variáveis de ambiente
```

------------------------------------------------------------------------

## ⚙️ Instalação

```bash
git clone https://github.com/luk-z0/e-commerce-phones.git 
cd e-commerce-phones 
npm install
```
Crie um arquivo `.env` a partir do `.env.example` e configure sua
variável `DATABASE_URL`.

------------------------------------------------------------------------

## 🗄️ Banco de Dados

```bash
npx prisma migrate dev 
npx prisma generate
```

------------------------------------------------------------------------

## ▶️ Executando

```bash
npm run dev 
npm run build 
npm run preview
```

A aplicação ficará disponível em http://localhost:3000

------------------------------------------------------------------------

## 🌍 Internacionalização

-   Configuração feita com @nuxtjs/i18n
-   Idiomas suportados: Português (pt) e Inglês (en)
-   Arquivos de tradução estão em app/i18n/locales

------------------------------------------------------------------------

<!-- ## 🖼️ Imagens

Uso de `<NuxtImage>`{=html} para carregamento otimizado e responsivo.

------------------------------------------------------------------------

## 🧪 Testes

Com @nuxt/test-utils, é possível criar testes unitários e de integração.

------------------------------------------------------------------------ -->

## 📜 Licença

Este projeto está sob a licença MIT.