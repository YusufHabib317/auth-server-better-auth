# Shipment Relay Platform API

A decentralized shipment coordination platform that connects customers, access operators, and car operators for efficient package delivery.

## Overview

This application is a decentralized shipment coordination platform that connects three types of participants:

- **Customer (C)**: Individuals sending packages.
- **Access Operator (AO)**: Registered physical points (e.g., shops) for package drop-off and pickup.
- **Car Operator (CO)**: Independent drivers who transport shipments between points.

The platform enables secure, traceable, and efficient delivery of parcels from **Point A** to **Point B**, through a verified and distributed network of users.

## Technology Stack

- **Backend**: Node.js with Express and TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication
- **Documentation**: Swagger/OpenAPI

## Project Structure

```
src/
├── controllers/       # Request handlers
├── interfaces/        # TypeScript interfaces
├── middleware/        # Express middleware
├── routes/            # API routes
├── services/          # Business logic
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── index.ts           # Application entry point
```

## Key Features

1. **User Management**
   - Registration and authentication for all user types
   - Role-based access control

2. **Shipment Management**
   - Create, track, and manage shipments
   - QR code-based tracking and verification

3. **Handover Process**
   - Secure package handover between different actors
   - Photo documentation at each step
   - Location tracking

4. **Notifications**
   - Real-time status updates
   - Event-based notifications

5. **Audit Trail**
   - Complete history of all actions
   - Dispute resolution support

## Getting Started

### Prerequisites

- Node.js (v14+)
- PostgreSQL (or Docker for containerized database)
- Yarn package manager

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd shipment-relay-platform
   ```

2. Install dependencies
   ```
   yarn install
   ```

3. Set up environment variables
   ```
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Set up the database

   **Option 1: Using Docker (Recommended for Development)**
   ```
   # Start PostgreSQL container
   docker-compose up -d

   # Run Prisma migrations
   npx prisma migrate dev
   ```

   **Option 2: Using Local PostgreSQL**
   ```
   # Make sure your PostgreSQL server is running
   # Update DATABASE_URL in .env file with your PostgreSQL credentials
   npx prisma migrate dev
   ```

5. Start the development server
   ```
   yarn dev
   ```

### Database Management

When using Docker for PostgreSQL, you can connect to the database using any PostgreSQL client with the following details:

- Host: localhost
- Port: 5432
- Database: naqalat_db
- Username: postgres
- Password: postgres

You can also install a database management tool like pgAdmin, DBeaver, or TablePlus to manage your PostgreSQL database.

### API Documentation

API documentation is available at `/api-docs` when the server is running.

## SOLID Principles Implementation

1. **Single Responsibility Principle**
   - Each service class has a single responsibility
   - Controllers handle HTTP requests, services handle business logic

2. **Open/Closed Principle**
   - Services are designed to be extended without modification
   - New functionality can be added by implementing new services

3. **Liskov Substitution Principle**
   - Interfaces are used to define contracts
   - Different implementations can be substituted without affecting the system

4. **Interface Segregation Principle**
   - Small, focused interfaces for different responsibilities
   - Clients only depend on interfaces they use

5. **Dependency Inversion Principle**
   - High-level modules depend on abstractions
   - ServiceFactory provides dependency injection

## Clean Code Practices

- Meaningful variable and function names
- Consistent code style
- Comprehensive error handling
- Detailed comments and documentation
- Separation of concerns
- Immutable data where possible
- Proper validation and security measures

## License

MIT
