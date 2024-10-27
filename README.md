
# 🎟 Tickets-hub

A study project for building a ticketing API with a focus on asynchronous processing and event-driven architecture. Built with **Node.js**, **Prisma**, and **PostgreSQL**, this API enables efficient management of events, users, and ticket sales.

## 📋 Project Overview

This project explores asynchronous processing and event-driven architecture in backend systems, using Node.js and Prisma for seamless database integration. This API provides CRUD operations for users, events, and tickets while handling ticket transactions and event updates asynchronously.

## 🚀 Features

- **Event-Driven Architecture**: Emphasizes non-blocking, asynchronous flows using event emitters and consumers.
- **Asynchronous Operations**: Handles ticket sales and event registrations with async/await and background processing.
- **CRUD for Events, Users, and Tickets**: Manage users, create events, and generate tickets with complete CRUD functionalities.
- **Prisma ORM**: Simplified database management and schema migration with Prisma.
- **PostgreSQL Database**: Relational data storage for managing event-related information.
- **Dockerized**: Configured with Docker for easy setup and deployment.

## 🛠 Technology Stack

- **Node.js**: Server-side JavaScript runtime.
- **Prisma**: Next-generation ORM for seamless database interactions.
- **PostgreSQL**: Relational database for data persistence.
- **Docker**: Containerization for isolated and reproducible environments.
- **Express.js**: Web framework for API development.

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v14+)
- **Docker** and **Docker Compose**

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mairaarquino/tickets-hub.git
   cd tickets-hub
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Copy `.env.example` to `.env` and update the PostgreSQL credentials:

   ```bash
   cp .env.example .env
   ```

4. **Start the services** (using Docker):

   ```bash
   docker-compose up --build
   ```

5. **Run migrations**:

   Run Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate deploy
   ```

6. **Generate Prisma Client**:

   ```bash
   npx prisma generate
   ```

The API should now be running on `http://localhost:8080`.

## 📝 Roadmap

- [ ] Add user authentication and authorization
- [ ] Implement real-time updates for ticket availability
- [ ] Integrate a caching layer for faster access

## 📜 License

This project is licensed under the MIT License.
