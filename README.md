# 📝 Blog Pessoal

Projeto Full Stack desenvolvido com **React + TypeScript** no frontend e **NestJS + TypeORM** no backend.

O sistema permite autenticação de usuários, cadastro, login e gerenciamento de conteúdo (postagens e temas).

---

## 🚀 Tecnologias Utilizadas

### Frontend

* React
* TypeScript
* React Router DOM
* Context API
* TailwindCSS
* Axios
* React Spinners

### Backend

* NestJS
* TypeScript
* TypeORM
* MySQL
* Class Validator
* Swagger

---

## 📂 Estrutura do Projeto

### Frontend

```
src/
├── assets/
├── components/
├── contexts/
├── models/
├── pages/
├── services/
└── App.tsx
```

### Backend

```
src/
├── usuario/
├── postagem/
├── tema/
├── auth/
└── app.module.ts
```

---

## 🔐 Funcionalidades

✔️ Cadastro de usuário
✔️ Login com autenticação
✔️ Logout
✔️ Context API para controle de autenticação
✔️ Proteção de rotas
✔️ CRUD de Postagens
✔️ CRUD de Temas

---

## 👤 Modelo de Usuário

```ts
{
  id: number
  nome: string
  usuario: string
  senha: string
  foto: string
  token?: string
}
```

---

## ⚙️ Como executar o projeto

### 📌 Clonar o repositório

```bash
git clone https://github.com/seu-usuario/blog-pessoal.git
```

---

### ▶️ Backend (NestJS)

#### Instalar dependências

```bash
npm install
```

#### Rodar o servidor

```bash
npm run start:dev
```

Servidor disponível em:

```
http://localhost:4000
```

Swagger:

```
http://localhost:4000/swagger
```

---

### 💻 Frontend (React)

#### Instalar dependências

```bash
npm install
```

#### Rodar projeto

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## 🔄 Fluxo de Autenticação

* Usuário realiza login
* Backend gera token
* Token é salvo no AuthContext
* Rotas protegidas verificam autenticação
* Logout limpa o contexto

---

## 🧠 Aprendizados

Este projeto foi desenvolvido para praticar:

* Arquitetura Full Stack
* Context API
* Hooks do React
* Autenticação
* Integração Frontend + Backend
* Boas práticas com TypeScript

---

## 📸 Preview

(Adicione prints aqui)

---

## 👩‍💻 Autora

Desenvolvido por **Nanda** 💜

---

## 📄 Licença

Este projeto é apenas para fins educacionais.
