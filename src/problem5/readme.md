# TS ExpressJS CRUD Starter

A project for building CRUD APIs using **Express.js**, **TypeScript**, and **PostgreSQL**.
It supports local development and containerized environments using **Docker** and **docker-compose**.

## Requirements

* Node.js 18+
* Yarn (recommended)
* Docker & Docker Compose (optional but recommended for full stack)

## Environment Variables

Create a `.env` file in the root directory.
Below is an example configuration:

```bash
PORT=3000
NODE_ENV=development

# Database
# DB_HOST=localhost # with localhost or your own host
DB_HOST=db          # with docker-compose
DB_PORT=5432
DB_USER=postgres
DB_PASS=pass
DB_NAME=expressdb

# TypeORM
TYPEORM_SYNC=true

# Logging
LOG_LEVEL=info
```

## Local Development (without Docker)

1. Install dependencies:

   ```bash
   yarn
   ```

2. Make sure PostgreSQL is running locally and matches your `.env` settings.

3. Run migrations or let TypeORM auto-sync tables:

   ```bash
   yarn dev
   ```

4. The server runs by default on:

   ```
   http://localhost:3000
   ```


## Run with Docker Compose

### Build and Start

```bash
# normal mode
yarn compose

# watch mode
yarn compose:watch 
```

This will:

* Runs `docker-compose up --build` or `docker-compose up --watch` depends on your mode
* Start a PostgreSQL container
* Start the API server container
* Automatically create the `expressdb` database
* Enable hot reload (via `ts-node-dev`)

### Stop Containers and  Remove Volumes

```bash
yarn compose:down
```

This will run `docker-compose down -v`

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/resources`     | Create a new resource |
| GET    | `/resources`     | List all resources    |
| GET    | `/resources/:id` | Get a resource by ID  |
| PUT    | `/resources/:id` | Update a resource     |
| DELETE | `/resources/:id` | Delete a resource     |


## License

MIT License
