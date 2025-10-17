# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NestJS-based backend application for a store system, using TypeScript, TypeORM, and MySQL as the database.

## Development Commands

### Running the Application
- `npm run start` - Start in production mode
- `npm run start:dev` - Start in development mode with hot-reload (watch mode)
- `npm run start:debug` - Start in debug mode with hot-reload

### Building
- `npm run build` - Compile the TypeScript code to JavaScript in the `dist/` directory

### Testing
- `npm run test` - Run unit tests
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:cov` - Run unit tests with coverage report
- `npm run test:debug` - Run tests in debug mode with inspector
- `npm run test:e2e` - Run end-to-end tests

### Code Quality
- `npm run lint` - Run ESLint and auto-fix issues
- `npm run format` - Format code with Prettier

## Architecture

### Database Configuration
- Uses TypeORM with MySQL
- Database connection configured via environment variables in `.env`
- Entity auto-loading pattern: `__dirname + '/**/*.entity{.ts,.js}'` (app.module.ts:22)
- `synchronize: true` in development mode - automatically syncs schema changes (app.module.ts:23)
- Logging enabled for database queries (app.module.ts:24)

### Global Configuration
- ConfigModule is globally available throughout the application (app.module.ts:10)
- Global ValidationPipe configured with:
  - `whitelist: true` - strips properties not defined in DTOs
  - `forbidNonWhitelisted: true` - throws error for unexpected properties
  - `transform: true` - automatically transforms payloads to DTO instances (main.ts:10-14)
- CORS enabled globally (main.ts:18)

### Application Structure
- Entry point: `src/main.ts`
- Root module: `src/app.module.ts`
- Default port: 3000 (configurable via PORT environment variable)
- Source files in `src/`, compiled output in `dist/`

## Key Technical Details

### TypeScript Configuration
- Module system: `nodenext` with full ESM support
- Target: ES2023
- Decorators enabled (required for NestJS)
- Strict null checks enabled, but `noImplicitAny` disabled

### Entity Pattern
When creating new entities:
- Place `.entity.ts` files anywhere in the `src/` directory - they're auto-discovered
- TypeORM will automatically load them based on the glob pattern in app.module.ts

### Environment Variables
Required variables in `.env`:
- `PORT` - Application port
- `NODE_ENV` - Environment (affects TypeORM synchronize behavior)
- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE` - Database connection details
