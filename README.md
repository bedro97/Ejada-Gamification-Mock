Ejada gamification Mock- Gamification Platform

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Setup Instructions](#setup-instructions)
5. [API Documentation](#api-documentation)
6. [Features](#features)
7. [Usage Guide](#usage-guide)
8. [Development](#development)
9. [Troubleshooting](#troubleshooting)

## Project Overview

Ejada gamification Mock is a comprehensive gamification platform that enables organizations to implement reward systems, track user progress, and foster engagement through badges, points, levels, and leaderboards. The platform provides a complete solution for creating engaging user experiences with real-time progress tracking and social competition elements.

### Key Features
- **User Management**: Complete user lifecycle management with profile tracking
- **Badge System**: Customizable badges with achievement criteria
- **Points System**: Flexible point awarding and tracking
- **Level Progression**: Automated level advancement based on points
- **Leaderboards**: Real-time competitive rankings
- **Action Tracking**: Monitor user activities and behaviors
- **Progress Analytics**: Visual progress charts and statistics

## Architecture

The platform follows a modern full-stack architecture with clear separation of concerns:

```
badge-blaze-nexus/
├── backend/                 # Spring Boot REST API
│   ├── src/main/java/
│   │   └── com/example/backend/
│   │       ├── controller/  # REST endpoints
│   │       ├── service/     # Business logic
│   │       ├── repository/  # Data access layer
│   │       ├── entity/      # JPA entities
│   │       ├── dto/         # Data transfer objects
│   │       └── config/      # Configuration classes
│   └── src/main/resources/
│       └── application.properties
├── frontend/                # React + Vite application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── package.json
└── docker-compose.yml      # Container orchestration
```

## Technology Stack

### Backend
- **Framework**: Spring Boot 3.x
- **Language**: Java 17+
- **Database**: PostgreSQL
- **ORM**: Spring Data JPA
- **Build Tool**: Maven
- **Container**: Docker

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: React Query (TanStack Query)
- **HTTP Client**: Native fetch API
- **UI Components**: Custom components with shadcn/ui patterns
- **Language**: TypeScript

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Database**: PostgreSQL
- **Development**: Hot reload enabled for both frontend and backend

## Setup Instructions

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- Docker and Docker Compose
- PostgreSQL (if running locally)

### Quick Start with Docker

1. **Clone the repository**
   

2. **Start the entire stack**
   ```bash
   docker-compose up -d
   ```

3. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8080
   - Database: localhost:5432

### Manual Setup

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Configure database** (edit `src/main/resources/application.properties`)
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/badge_blaze_nexus
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. **Run the application**
   ```bash
   # Using Maven wrapper
   ./mvnw spring-boot:run
   
   # Or using Maven directly
   mvn spring-boot:run
   ```

#### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

## API Documentation

### Base URL
```
http://localhost:8080/api
```

### Authentication
Currently, the API operates without authentication for development purposes. In production, implement proper JWT or session-based authentication.

### Core Endpoints

#### Users
- `GET /users` - Get all users
- `GET /users/{id}` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user
- `GET /users/{id}/level` - Get user's current level
- `GET /users/{id}/points-history` - Get user's points history

#### Badges
- `GET /badges` - Get all badges
- `GET /badges/{id}` - Get badge by ID
- `POST /badges` - Create new badge
- `PUT /badges/{id}` - Update badge
- `DELETE /badges/{id}` - Delete badge

#### Actions
- `GET /actions` - Get all actions
- `GET /actions/{id}` - Get action by ID
- `POST /actions` - Create new action
- `PUT /actions/{id}` - Update action
- `DELETE /actions/{id}` - Delete action
- `POST /actions/{id}/award-points` - Award points for an action

#### Leaderboards
- `GET /leaderboards` - Get leaderboard rankings
- `GET /leaderboards?timeframe=weekly` - Get weekly leaderboard
- `GET /leaderboards?timeframe=monthly` - Get monthly leaderboard

#### Levels
- `GET /levels` - Get all levels
- `GET /levels/{id}` - Get level by ID
- `POST /levels` - Create new level
- `PUT /levels/{id}` - Update level
- `DELETE /levels/{id}` - Delete level

### Data Models

#### User
```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "totalPoints": 1250,
  "currentLevel": 3,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

#### Badge
```json
{
  "id": 1,
  "name": "First Steps",
  "description": "Complete your first action",
  "icon": "🎯",
  "pointsRequired": 100,
  "isActive": true
}
```

#### Action
```json
{
  "id": 1,
  "name": "Login",
  "description": "User logged into the system",
  "pointsAwarded": 10,
  "isActive": true
}
```

## Features

### Dashboard
- **Progress Overview**: Visual representation of user progress
- **Recent Activity**: Latest actions and achievements
- **Statistics Cards**: Key metrics at a glance
- **Progress Charts**: Interactive charts showing growth over time

### Badge Management
- **Badge Creation**: Define custom badges with criteria
- **Badge Assignment**: Automatically or manually assign badges
- **Badge Display**: Visual badge showcase with progress tracking

### Leaderboard System
- **Real-time Rankings**: Live leaderboard updates
- **Time-based Filtering**: Weekly, monthly, and all-time rankings
- **User Profiles**: Detailed user information and achievements

### Level System
- **Progressive Levels**: Automatic level advancement
- **Level Requirements**: Configurable point thresholds
- **Level Benefits**: Unlock features based on level

### User Management
- **User Profiles**: Comprehensive user information
- **Points History**: Detailed transaction log
- **Achievement Tracking**: Badge and level progress

## Usage Guide

### For Administrators

1. **Setting Up the System**
   - Configure levels with appropriate point thresholds
   - Create badges with meaningful criteria
   - Define actions that award points

2. **Managing Users**
   - Monitor user progress through the dashboard
   - Review leaderboard rankings
   - Analyze user engagement patterns

3. **Customizing the Experience**
   - Adjust point values for actions
   - Create new badge types
   - Modify level requirements

### For End Users

1. **Getting Started**
   - Complete profile setup
   - View current level and points
   - Explore available badges

2. **Earning Points**
   - Perform actions that award points
   - Track progress in real-time
   - View points history

3. **Achieving Badges**
   - Complete requirements for badges
   - View badge collection
   - Share achievements

## Development

### Project Structure

#### Backend Structure
```
backend/src/main/java/com/example/backend/
├── BackendApplication.java          # Main application class
├── config/
│   └── SecurityConfig.java          # Security configuration
├── controller/                      # REST controllers
│   ├── UserController.java
│   ├── BadgeController.java
│   ├── ActionController.java
│   ├── LeaderboardController.java
│   └── LevelController.java
├── service/                         # Business logic
│   ├── UserService.java
│   ├── BadgeService.java
│   └── ActionService.java
├── repository/                      # Data access
│   ├── UserRepository.java
│   ├── BadgeRepository.java
│   ├── ActionRepository.java
│   ├── PointsLogRepository.java
│   └── LevelRepository.java
├── entity/                          # JPA entities
│   ├── User.java
│   ├── Badge.java
│   ├── Action.java
│   ├── PointsLog.java
│   ├── Level.java
│   └── UserBadge.java
└── dto/                            # Data transfer objects
    ├── UserDTO.java
    ├── ActionDTO.java
    └── PointsLogDTO.java
```

#### Frontend Structure
```
frontend/src/
├── App.tsx                          # Main application component
├── main.tsx                         # Application entry point
├── pages/                           # Page components
│   ├── Dashboard.tsx
│   ├── Users.tsx
│   ├── Badges.tsx
│   ├── Leaderboards.tsx
│   └── Levels.tsx
├── components/                      # Reusable components
│   ├── ui/                         # Base UI components
│   ├── dashboard/                  # Dashboard-specific components
│   ├── badges/                     # Badge-related components
│   ├── leaderboards/               # Leaderboard components
│   └── users/                      # User management components
├── hooks/                          # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── lib/                           # Utility functions
    └── utils.ts
```

### Development Workflow

1. **Backend Development**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

2. **Frontend Development**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Database Changes**
   - Update entities in `backend/src/main/java/com/example/backend/entity/`
   - Run database migrations if needed
   - Update repositories and services accordingly

4. **API Testing**
   ```bash
   # Test user endpoints
   curl -X GET http://localhost:8080/api/users
   
   # Test leaderboard
   curl -X GET http://localhost:8080/api/leaderboards
   
   # Test points history
   curl -X GET http://localhost:8080/api/users/1/points-history
   ```

### Code Quality

#### Backend
- Follow Spring Boot best practices
- Use proper exception handling
- Implement comprehensive logging
- Write unit tests for services
- Use DTOs for API responses

#### Frontend
- Follow React best practices
- Use TypeScript for type safety
- Implement proper error handling
- Use React Query for data fetching
- Follow component composition patterns

## Troubleshooting

### Common Issues

#### Backend Issues

1. **Database Connection Errors**
   ```bash
   # Check if PostgreSQL is running
   docker ps | grep postgres
   
   # Check database logs
   docker logs <postgres-container-id>
   ```

2. **Compilation Errors**
   ```bash
   # Clean and rebuild
   cd backend
   ./mvnw clean compile
   ```

3. **Port Conflicts**
   ```bash
   # Check if port 8080 is in use
   lsof -i :8080
   
   # Kill process if needed
   kill -9 <process-id>
   ```

#### Frontend Issues

1. **Dependency Issues**
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Build Errors**
   ```bash
   # Check TypeScript errors
   npm run build
   
   # Check linting issues
   npm run lint
   ```

3. **API Connection Issues**
   - Verify backend is running on port 8080
   - Check CORS configuration
   - Verify API endpoints are correct

### Performance Optimization

1. **Database Optimization**
   - Add appropriate indexes
   - Use pagination for large datasets
   - Implement caching where appropriate

2. **Frontend Optimization**
   - Implement lazy loading
   - Use React.memo for expensive components
   - Optimize bundle size

3. **API Optimization**
   - Implement response caching
   - Use pagination for large responses
   - Optimize database queries

### Monitoring and Logging

1. **Backend Logging**
   - Configure log levels in `application.properties`
   - Monitor application logs for errors
   - Set up log aggregation if needed

2. **Frontend Monitoring**
   - Implement error boundaries
   - Add performance monitoring
   - Track user interactions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review the API documentation

---

**Badge Blaze Nexus** - Empowering engagement through gamification 