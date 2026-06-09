# Cinema API

API de gerenciamento de cinema construída com NestJS, Prisma ORM e PostgreSQL.

---

## Pré-requisitos

- Node.js 18+
- PostgreSQL em execução
- npm

---

## Configuração

**1. Instale as dependências:**

```bash
npm install
```

**2. Configure o arquivo `.env` na raiz do projeto com as credenciais do seu banco:**

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/cinema_db?schema=public"
```

**3. Aplique as migrations e gere o client do Prisma:**

```bash
npx prisma migrate deploy
npx prisma generate
```

---

## Rodando a aplicação

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.

---

## Documentação interativa (Swagger)

Com a aplicação rodando, acesse:

```
http://localhost:3000/api
```

O Swagger lista todos os endpoints disponíveis e permite testá-los diretamente pelo navegador.

---

## Endpoints disponíveis

| Recurso     | Rota base     |
|-------------|---------------|
| Cinema      | `/cinema`     |
| Salas       | `/salas`      |
| Filmes      | `/filmes`     |
| Sessões     | `/sessoes`    |
| Ingressos   | `/ingressos`  |
| Pedidos     | `/pedidos`    |
| Lanches     | `/lanches`    |

Cada recurso expõe os métodos: `POST`, `GET`, `GET /:id`, `PATCH /:id`, `DELETE /:id`.

---

## Ordem recomendada para cadastro

Por conta das dependências entre entidades, cadastre nessa sequência:

1. `POST /cinema` — cadastrar o cinema
2. `POST /salas` — cadastrar sala (requer `cinemaId`)
3. `POST /filmes` — cadastrar filme (requer `cinemaId`)
4. `POST /sessoes` — criar sessão (requer `cinemaId`, `salaId`, `filmeId`)
5. `POST /ingressos` — criar ingresso (requer `sessaoId`)
6. `POST /pedidos` — criar pedido (requer `ingressoIds[]`)
7. `POST /lanches` — adicionar lanche ao pedido (requer `pedidoId`)
