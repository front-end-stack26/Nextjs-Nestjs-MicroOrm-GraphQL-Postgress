# Task Manager

A simple task management app with a NestJS GraphQL API and a Next.js frontend.

## Services
- `apps/api`: NestJS API server
- `apps/web`: Next.js frontend
- `db`: PostgreSQL database

## Run with Docker
Start the stack:

```bash
docker compose up -d
```

Open:
- API: http://localhost:4000/graphql
- Web: http://localhost:3000

## Develop locally
Install dependencies in each app:

```bash
cd apps/api
npm install

cd ../web
npm install
```

Run the API:

```bash
cd apps/api
npm run start:dev
```

Run the frontend:

```bash
cd apps/web
npm run dev
```

## Notes
- The project uses Docker Compose and a PostgreSQL database.
- Configure environment variables in a `.env` file if needed.
- The API is protected by JWT; the frontend expects authentication tokens.

