# Backend Server Structure - Kasroad Auth Server

## 📁 Project Structure

```
auth/
├── src/
│   ├── config/              # Configuration management
│   │   ├── env.ts          # Environment variables validation (Zod)
│   │   └── index.ts        # Config exports
│   │
│   ├── middleware/          # Express middleware
│   │   ├── errorHandler.ts # Global error handling & AppError class
│   │   └── index.ts        # Middleware exports
│   │
│   ├── routes/              # API routes
│   │   └── index.ts        # Main router (API info endpoint)
│   │
│   ├── controllers/         # Route controllers (ready for auth logic)
│   ├── services/            # Business logic layer (ready for auth services)
│   ├── utils/               # Utility functions
│   │   └── prisma.ts       # Prisma client singleton
│   │
│   ├── types/               # TypeScript type definitions
│   │   ├── express.d.ts    # Express type extensions
│   │   ├── index.d.ts      # Global types
│   │   └── models.ts       # Model types
│   │
│   ├── app.ts              # Express app configuration
│   └── index.ts            # Server entry point
│
├── prisma/
│   └── schema.prisma       # Database schema (Better Auth compatible)
│
├── .env                     # Environment variables
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

## 🎯 What's Been Set Up

### 1. **Environment Configuration** (`src/config/`)
- ✅ Zod-based environment validation
- ✅ Type-safe environment variables
- ✅ Validates all required Better Auth credentials
- ✅ Fails fast with clear error messages

### 2. **Express Application** (`src/app.ts`)
- ✅ Security middleware (Helmet)
- ✅ CORS configuration (development & production ready)
- ✅ Body parsing (JSON & URL-encoded)
- ✅ Request logging (Morgan)
- ✅ Health check endpoint (`/health`)
- ✅ API routes mounted at `/api`
- ✅ Global error handling
- ✅ 404 handler

### 3. **Server Entry Point** (`src/index.ts`)
- ✅ Database connection testing
- ✅ Graceful shutdown handling (SIGTERM, SIGINT)
- ✅ Proper error logging
- ✅ Clean startup messages

### 4. **Error Handling** (`src/middleware/errorHandler.ts`)
- ✅ Custom `AppError` class for operational errors
- ✅ Global error handler middleware
- ✅ Development vs Production error responses
- ✅ 404 Not Found handler

### 5. **Database Schema** (`prisma/schema.prisma`)
- ✅ Better Auth compatible models:
  - `User` - User accounts
  - `Account` - OAuth & credential providers
  - `Session` - User sessions
  - `Verification` - Email/phone verification
- ✅ Proper relations and indexes
- ✅ PostgreSQL with Neon DB support

### 6. **Type Safety**
- ✅ TypeScript strict mode enabled
- ✅ Express type extensions for user context
- ✅ Path aliases configured (`@/*`)
- ✅ All type checks passing

## 🚀 Available Scripts

```bash
# Development
yarn dev              # Start dev server with hot reload

# Production
yarn build            # Compile TypeScript to JavaScript
yarn start            # Run production build

# Quality
yarn type-check       # TypeScript type checking
yarn lint             # ESLint code linting
```

## 🔌 API Endpoints (Current)

### Health Check
```
GET /health
Response: { status: "ok", timestamp: "...", environment: "development" }
```

### API Info
```
GET /api/
Response: { name: "Kasroad Auth Server", version: "1.0.0", status: "ready" }
```

## 🗄️ Database Models

### User
- `id` - Unique identifier (CUID)
- `name` - User's display name
- `email` - Unique email address
- `emailVerified` - Email verification status
- `image` - Profile image URL
- `createdAt` / `updatedAt` - Timestamps

### Account
- OAuth provider accounts
- Credential-based accounts
- Tokens (access, refresh, ID)
- Password storage (for credential provider)

### Session
- Session management
- IP address & user agent tracking
- Expiration handling

### Verification
- Email/phone verification codes
- Time-based expiration

## 🔐 Environment Variables

Required variables (already configured in `.env`):
- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_URL` - Auth server URL
- `BETTER_AUTH_SECRET` - Secret key (32+ chars)
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` - Google OAuth
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` - GitHub OAuth
- `SMTP_*` - Email configuration

## ✅ Build Status

- ✅ TypeScript compilation: **PASSING**
- ✅ Type checking: **PASSING**
- ✅ Prisma client: **GENERATED**
- ✅ Project structure: **READY**

## 📝 Next Steps (Ready for Better Auth Integration)

The backend structure is now ready. Next steps would be:

1. **Install Better Auth** - Add the Better Auth library
2. **Configure Better Auth** - Set up auth instance with providers
3. **Create Auth Routes** - Add authentication endpoints
4. **Add Auth Middleware** - Protect routes with authentication
5. **Database Migration** - Run Prisma migrations
6. **Test Authentication** - Verify OAuth flows

## 🏗️ Architecture Principles

- **Separation of Concerns** - Clear boundaries between layers
- **Type Safety** - Full TypeScript coverage
- **Error Handling** - Centralized error management
- **Configuration** - Environment-based settings
- **Scalability** - Ready for horizontal scaling
- **Security** - Helmet, CORS, input validation ready
- **Maintainability** - Clean folder structure, consistent patterns

---

**Status**: ✅ Backend structure complete and ready for Better Auth implementation

