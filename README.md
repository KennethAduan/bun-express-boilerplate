# Bun Express API Template

A modern, production-ready API template built with Bun, Express, Prisma, and TypeScript.

## 🚀 Features

- **Modern Stack:**

  - [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime
  - [Express](https://expressjs.com/) - Web framework
  - [Prisma](https://www.prisma.io/) - Type-safe ORM
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - [Zod](https://zod.dev/) - Schema validation

- **Authentication & Security:**

  - JWT authentication
  - Password hashing with Bun's crypto
  - Rate limiting
  - Helmet security headers
  - CORS configuration

- **Developer Experience:**

  - ESLint & Prettier configuration
  - Swagger/OpenAPI documentation
  - Hot reloading in development
  - Comprehensive testing setup
  - Email service integration

- **Production Ready:**
  - Error handling
  - Request logging
  - Environment configuration
  - Database migrations
  - API documentation

## �� Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [PostgreSQL](https://www.postgresql.org/) (14 or higher)
- [Node.js](https://nodejs.org/) (18 or higher)

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bun-express-api.git
cd bun-express-api
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
APP_NAME=Your App Name
CLIENT_URL=http://localhost:3000
```

5. Initialize the database:

```bash
bun run db:migrate
```

## 🚀 Usage

### Development

```bash
# Start development server with hot reload
bun run dev

# Generate Prisma client
bun run db:generate

# Run database migrations
bun run db:migrate

# Open Prisma Studio
bun run db:studio
```

### Testing

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Generate test coverage
bun test --coverage
```

### Code Quality

```bash
# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Format code
bun run format

# Check formatting
bun run format:check
```

## 📁 Project Structure

```
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middlewares/    # Express middlewares
│   ├── models/         # Prisma models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── tests/          # Test files
│   └── utils/          # Utility functions
├── prisma/
│   └── schema.prisma   # Database schema
└── package.json
```

## 🔒 Authentication

The API uses JWT for authentication. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 📨 Email Service

Email functionality is implemented using Nodemailer. Available templates:

- Welcome email
- Password reset email

Configure your SMTP settings in the `.env` file to enable email functionality.

## 📚 API Documentation

Swagger documentation is available at `/api-docs` when the server is running.

## 🧪 Testing

The project includes:

- Unit tests for services and utilities
- Integration tests for API endpoints
- Test helpers and utilities
- Separate test database configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## �� Acknowledgments

- [Bun](https://bun.sh/) - For the amazing JavaScript runtime
- [Express](https://expressjs.com/) - For the web framework
- [Prisma](https://www.prisma.io/) - For the database ORM
- [TypeScript](https://www.typescriptlang.org/) - For type safety

## 📞 Support

For support, email kenneth.aduan10@gmail.com or open an issue in the repository.

## 🔮 Roadmap

- [ ] Add GraphQL support
- [ ] Add WebSocket support
- [ ] Add file upload functionality
- [ ] Add caching layer
- [ ] Add Docker support
