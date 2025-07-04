# 🎮 Gamification Platform

A modular, scalable gamification engine designed to plug into any e-learning, e-commerce, or productivity platform. Reward users with points, badges, and levels. Includes an admin dashboard and leaderboard system.

---

## 🔧 Tech Stack

- **Backend**: Spring Boot (Java)
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose

---

## 🧩 Features

### Backend
- Award points based on user actions
- Unlock badges and assign levels
- RESTful APIs with Swagger docs
- Daily/weekly/monthly leaderboards
- Multi-tenancy support (via tenant ID)
- JWT-secured endpoints

### Frontend
- Admin dashboard
- View leaderboards and user profiles
- Add/edit badges with validation
- React Query for state/data fetching

---

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Java 17+
- Node.js (for frontend only)

### Running with Docker
```bash
docker-compose up --build
