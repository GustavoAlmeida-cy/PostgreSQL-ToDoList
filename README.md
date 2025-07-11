# 📝 Full Stack ToDo List API

[![Node.js](https://img.shields.io/badge/Node.js-v22.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5.x-blue)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13-blue)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-lightblue)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-Container-blue)](https://www.docker.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-yellow)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-ISC-green)](https://opensource.org/licenses/ISC)

---

API RESTful para gerenciamento de tarefas (_ToDo List_) com autenticação JWT, banco de dados PostgreSQL e Prisma ORM. Todo o ambiente é containerizado com Docker para facilitar a instalação e implantação.

---

## 🚀 Tecnologias Utilizadas

- Node.js (v22.x)
- Express.js (v5.x)
- PostgreSQL
- Prisma ORM
- JSON Web Token (JWT)
- Docker & Docker Compose
- bcryptjs
- dotenv

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- Docker e Docker Compose instalados  
_ou_  
- Node.js instalado para rodar localmente

---

### Rodando com Docker

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Crie o arquivo .env na raiz com as variáveis:
# DATABASE_URL=postgresql://postgres:postgres@db:5432/todoapp
# JWT_SECRET=sua_chave_secreta_aqui
# PORT=8383

docker compose up -d --build

docker exec -it todo-app sh
npx prisma migrate deploy
exit

# API disponível em http://localhost:8383
```

---

### Rodando localmente

```bash
npm install

# Configure o .env com as mesmas variáveis do Docker

npx prisma generate
npx prisma migrate dev
npm run dev
```

---

## 🔐 Autenticação

API segura com JWT. Envie o token no header `Authorization` em todas as rotas protegidas:

```
Authorization: Bearer <token>
```

---

## 📮 Endpoints Principais

<div align="center">

<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Rota</th>
      <th>Descrição</th>
      <th>Protegido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/</code></td>
      <td>Rota raiz</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/auth/register</code></td>
      <td>Registrar novo usuário</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/auth/login</code></td>
      <td>Login e geração de token</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/todos</code></td>
      <td>Buscar todos os todos</td>
      <td>Sim</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/todos</code></td>
      <td>Criar novo todo</td>
      <td>Sim</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td><code>/todos/:id</code></td>
      <td>Atualizar um todo existente</td>
      <td>Sim</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td><code>/todos/:id</code></td>
      <td>Deletar um todo</td>
      <td>Sim</td>
    </tr>
  </tbody>
</table>

</div>

<p align="center">
  <b>Exemplo de uso dos endpoints protegidos:</b><br/>
  Envie no header:<br/>
  <code>Authorization: Bearer &lt;seu_token_jwt&gt;</code>
</p>

---

## 🙋‍♂️ Autor

Feito com 💻 por Gustavo Almeida
