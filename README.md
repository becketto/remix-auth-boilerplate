# Auth Boilerplate for Remix Apps

This project provides a reusable authentication boilerplate for Remix applications, including user login, registration, password reset, and session management.

## Features
- User registration with email and password
- Secure login with bcrypt password hashing
- Password reset functionality
- Session management
- Prisma ORM integration with PostgreSQL

## Getting Started

### Prerequisites
- Node.js >= 20.0.0
- PostgreSQL database (or adjust the Prisma schema for another provider)
- npm or yarn for package management

### Installation

1. **Clone or Copy Files**:
   If you're integrating this into an existing Remix project, copy the following directories and files into your project root:
   - `app/routes/` (contains auth-related route files like login, register, etc.)
   - `app/auth/` (session management utilities)
   - `app/components/` (UI components for auth forms)
   - `app/utils/` (database and other utilities)
   If you're starting fresh, clone this repository.

2. **Install Dependencies**:
   ```bash
   npm install prisma @prisma/client --save-dev
   npm install bcryptjs @prisma/client
   ```

3. **Initialize Prisma** (if not already done):
   ```bash
   npx prisma init
   ```

4. **Update Prisma Schema**:
   Add the following `User` model to `prisma/schema.prisma`:
   ```prisma
   model User {
     id                  Int       @id @default(autoincrement())
     email               String    @unique
     passwordHash        String
     resetToken          String?   // For password reset functionality
     resetTokenExpiresAt DateTime? // For password reset token expiration
     createdAt           DateTime  @default(now())
     updatedAt           DateTime  @updatedAt
   }
   ```

5. **Configure Database Connection**:
   Update the `DATABASE_URL` in your `.env` file with your PostgreSQL connection string. Example:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   ```
   Ensure your PostgreSQL database is running and accessible.

6. **Generate Prisma Client and Apply Migrations**:
   ```bash
   npm install @prisma/client@latest
   npx prisma generate
   npx prisma migrate dev --name init
   ```

7. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173` (or the port specified by Remix/Vite) to see the app running.

### Troubleshooting
- **Prisma Client Initialization Error**: If you encounter an error like "@prisma/client did not initialize yet", ensure `@prisma/client` is installed (`npm install @prisma/client`), then rerun `npx prisma generate`.
- **Database Connection Issues**: Verify your `DATABASE_URL` is correct and your database server is running.
- **Dependency Conflicts**: If you face version mismatches, clear `node_modules` (`rm -rf node_modules`), then reinstall (`npm install`).

### Usage
- Access the landing page at `/` for sign-in and registration links.
- Login at `/auth-flow/login`, register at `/auth-flow/register`, and reset password at `/auth-flow/forgot-password`.
- After login, users are redirected to `/dashboard/home`.

## Customization
- Modify the UI components in `app/components/` to match your project's design.
- Extend the `User` model in `prisma/schema.prisma` for additional fields like user roles or profile data.
- Update route paths in route files if your app uses a different structure.

## Contributing
Feel free to submit issues or pull requests to improve this boilerplate.

## License
[Add your license information here]