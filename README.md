

Full Stack Senior Developer Assessment – Gamification Platform



Section 1: Leadership & System Design









1.2 Engineering Practices & Team Management

How do you ensure consistent code quality?
To maintain high and consistent code quality across the team, I follow a few key practices:
I enforce code reviews on all pull requests, with at least one reviewer required before merging.


We use linting tools like ESLint (for React) and Checkstyle (for Java) to enforce consistent coding standards.


I promote Clean Code principles and modular architecture, and I regularly run technical deep-dives to align the team on best practices.


Static analysis tools such as SonarQube are integrated into our CI pipeline to detect code smells, duplicate code, and maintain complexity thresholds.


What DevOps practices do you enforce?
I believe in automation, transparency, and stability. In our projects:
We use CI/CD pipelines (via GitHub Actions or GitLab CI) to automate build, test, and deployment processes.


All services are containerized with Docker, and we use docker-compose for local development and staging environments.


Configuration is handled through environment variables and .env files, and sensitive data is managed using vaults or encrypted secret stores.


We implement infrastructure as code (e.g., with Terraform) for repeatable and trackable deployments.


Monitoring and logging are also part of our stack, using tools like Prometheus, Grafana, and ELK.




How do you encourage collaborative ownership of features?
I encourage a culture where every developer takes end-to-end ownership of features. My approach includes:
Assigning complete features (not just tasks) to individuals or pairs, including frontend, backend, and testing responsibilities.


Involving developers in planning, estimation, and design discussions, so they understand the "why" as much as the "what."


Holding regular retrospectives and feedback loops to improve our process and ensure everyone feels their voice matters.


Rotating responsibilities (e.g., sprint lead, release coordinator) so team members are exposed to different parts of the system and gain confidence across the stack.


What’s your approach to onboarding new team members?
I have a structured onboarding plan to ensure smooth integration:
I assign a mentor or buddy from the team to help with technical and contextual onboarding.


The new member receives access to a starter task, our project’s documentation, API collections (e.g., Postman), and Docker setup for the dev environment.


I ensure their first 1–2 weeks are focused on understanding the architecture and shadowing existing features through pair programming.


I also schedule bi-weekly 1-on-1s during their onboarding period to check progress, answer questions, and ensure they’re comfortable with the workflow and expectations.











1.3 Observability, Resilience & Security
Scenario: The leaderboard API is slow and occasionally fails.
How would you design the system for resilience (fallbacks, circuit breakers)?
To improve resilience in the system, especially around leaderboard generation, I would:
Implement circuit breakers using a tool like Resilience4j or Spring Cloud Circuit Breaker to prevent cascading failures when the leaderboard service or database becomes unresponsive.


Introduce timeouts and retries with exponential backoff for downstream API/database calls to avoid unnecessary blocking.


Apply graceful degradation: if leaderboard generation fails, the system can fall back to a cached result (e.g., from Redis or an in-memory store).


Design leaderboard aggregation as an asynchronous task that runs periodically (e.g., using scheduled jobs or event queues), and serves results from a materialized view or precomputed cache.


This architecture reduces user-facing latency and isolates failure without fully compromising functionality.








What metrics and logs would you collect?
I focus on both technical and business-level metrics for observability:
Technical Metrics (via Prometheus):
API response time (p95, p99 latencies)


Request throughput and error rates


Circuit breaker status (open/closed)


Cache hit/miss ratio


DB query execution time


Business Metrics:
Number of point awards per day


Badge unlock counts


Leaderboard engagement (API calls per period)


Logging Strategy:
Structured logs with trace IDs using SLF4J + MDC for correlation across services


Error logs with full exception trace


Audit logs for user actions (e.g., action triggers, badge unlocks)


Logs are aggregated using a centralized logging system (e.g., ELK or Grafana Loki), which helps us monitor and debug in real time.




How would you secure the APIs and ensure data integrity?
To secure the system and protect user data, I follow these principles:
Authentication & Authorization:
Use JWT tokens for stateless authentication across services


Apply role-based access control (RBAC) using annotations like @PreAuthorize in Spring Security


Data Integrity & Validation:
Validate all inputs at the controller layer using Spring’s @Valid and custom validators


Use database constraints (foreign keys, uniqueness, not-null) to protect data integrity at the storage level


Hash sensitive data or encrypt fields like email addresses or tenant identifiers when needed


Transport & Access Security:
Enforce HTTPS for all API traffic


Implement rate limiting and IP whitelisting on sensitive endpoints


Monitor and alert on suspicious behavior (e.g., high-frequency API calls)









Section 2: Technical Challenges
2.1 Backend – Spring Boot
REST Features:
POST /actions to award points


GET /leaderboard?period=daily|weekly|monthly


GET /users/{id} to view profile


GET/POST/PUT /badges for badge management

Swagger API : http://localhost:8080/swagger-ui/index.html






Technologies:
Spring Boot, JPA (Hibernate), PostgreSQL


Global exception handling with @ControllerAdvice


Swagger docs with SpringDoc


Asynchronous processing via @Async or Kafka










2.2 Frontend – React.js
Core Features:
Leaderboard with filters (daily, weekly, monthly)


User profile view with badges and point history


Form for creating/updating badges with validation


Technologies:
React 18 (UI library)
Vite (build tool)
@tanstack/react-query (data fetching/caching)
TailwindCSS (utility-first CSS framework)
Native fetch API (for API calls)
Native React state (for form management and validation)























2.3 Database Design
Tables:
users(id, name, email, tenant_id)


actions(id, name, points, tenant_id)


points_log(id, user_id, action_id, created_at, tenant_id)


badges(id, name, criteria_json, tenant_id)


user_badges(user_id, badge_id, earned_at, tenant_id)


levels(id, name, min_points, tenant_id)



