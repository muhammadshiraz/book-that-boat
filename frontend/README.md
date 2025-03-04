Here’s a **professional and well-structured `README.md`** file for your Next.js project with **Payload CMS** integration. It includes project setup instructions, a structured directory overview, and development guidelines.  

---

## 🚀 **Book That Boat** – Next.js + Payload CMS  

### 📌 **Project Overview**  
"Book That Boat" is a **boat rental platform** built using **Next.js** (frontend) and **Payload CMS** (backend). It allows users to browse available boats and book them seamlessly.

---

## 📂 **Project Structure**  

```
📦 book-that-boat
├── 📁 backend/               # Payload CMS backend
│   ├── 📁 src/
│   │   ├── 📁 collections/   # Payload CMS collections (Boats, Users, Reservations, Menu)
│   │   ├── 📄 payload.config.ts # Payload CMS config
│   ├── 📄 .env               # Environment variables
│   ├── 📄 package.json       # Backend dependencies
│   ├── 📄 tsconfig.json      # TypeScript config
│
├── 📁 frontend/              # Next.js frontend
│   ├── 📁 public/            # Static assets (favicons, images)
│   ├── 📁 src/
│   │   ├── 📁 components/    # Reusable UI components (Header, Footer, etc.)
│   │   ├── 📁 pages/         # Next.js pages (index.tsx, boats.tsx, etc.)
│   │   ├── 📁 hooks/         # Custom hooks for fetching data
│   │   ├── 📁 lib/           # API utilities (axios setup, Payload API fetcher)
│   │   ├── 📁 styles/        # Global styles & Tailwind CSS config
│   │   ├── 📄 next.config.ts # Next.js config (image domains, redirects)
│   ├── 📄 package.json       # Frontend dependencies
│   ├── 📄 tsconfig.json      # TypeScript config
│
├── 📄 README.md              # Project documentation
├── 📄 .gitignore             # Ignore files for Git
```

---

## ⚙️ **Backend Setup (Payload CMS)**
### 1️⃣ Install Dependencies
```sh
cd backend
npm install
```

### 2️⃣ Create `.env` File
```sh
cp .env.example .env
```
Edit `.env` with your settings:
```
DATABASE_URI=file:./backend.db
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:3001
```

### 3️⃣ Run the Backend
```sh
npm run dev
```
The backend runs at **`http://localhost:3000`**.

---

## 🌐 **Frontend Setup (Next.js)**
### 1️⃣ Install Dependencies
```sh
cd frontend
npm install
```

### 2️⃣ Update `next.config.ts` (For Payload CMS Images)
```ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/media/**",
      },
    ],
  },
};

export default nextConfig;
```

### 3️⃣ Run the Frontend
```sh
npm run dev
```
The frontend runs at **`http://localhost:3001`**.

---

## 🔌 **API Endpoints**
| Endpoint                     | Method | Description |
|------------------------------|--------|-------------|
| `/api/boats`                 | GET    | Get all boats |
| `/api/boats/:id`             | GET    | Get boat details |
| `/api/menu`                  | GET    | Fetch navigation menu |
| `/api/reservations`          | POST   | Create a reservation |

---

## 🛠 **Development Guidelines**
### ✅ Code Formatting
Use **Prettier** and **ESLint** for clean code:
```sh
npm run lint
npm run format
```

### ✅ Git Best Practices
- **Feature branches**: Use `feature/your-feature-name`
- **Commits**: Write meaningful commit messages (e.g., `feat: added header component`)
- **Pull Requests (PRs)**: Always create PRs before merging into `main`

### ✅ Deploying to Production
1. Build the frontend:
   ```sh
   npm run build
   ```
2. Start the backend in production mode:
   ```sh
   npm run start
   ```

---

## 🚀 **Tech Stack**
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Payload CMS, SQLite
- **State Management**: React Query
- **Deployment**: Vercel (Frontend), Payload Cloud (Backend)

---

## 📌 **Future Improvements**
✅ **User Authentication (JWT-based login system)**  
✅ **Payment Integration (Stripe for boat reservations)**  
✅ **Admin Dashboard for managing boats & bookings**  

---

### 🔗 **Contributors**
👨‍💻 **Your Name** – [GitHub](https://github.com/yourusername)  
🚀 **Maintained by**: Your Team Name  

---

### 💡 **Need Help?**
If you encounter issues, please create an issue on GitHub or reach out via email.  

---
  
✅ **Ready to set sail? Happy coding!** 🚤