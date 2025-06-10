# 🛠️ Role-Based Inventory UI (Frontend-Only)

A React-based frontend-only application simulating a role-based inventory management system with light/dark mode, product CRUD UI, and restricted dashboard access.

## 🚀 Features

### 🔐 Authentication & Access
- Email/password login (mocked data)
- Role-based access:
  - **Manager**: Full access (Dashboard, Products, Add/Edit)
  - **Store Keeper**: Limited access (Products, Add/Edit)

### 📊 Core Functionality
- Dashboard with protected route (Manager only)
- View all products (shared by both roles)
- Add/Edit products using form UI

### 🎨 UI Enhancements
- Light/Dark mode toggle (saved in localStorage)
- Dynamic menu based on user role
- Role-based button & route access controls

---

## 🧪 Mock Credentials

| Role          | Email              | Password |
|---------------|--------------------|----------|
| Manager       | manager@test.com   | 1234     |
| Store Keeper  | keeper@test.com    | 1234     |

---


---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/slooze.git
   cd slooze

Install dependencies
  npm install

Start the development server
  npm run dev

Login with any mock user and test role-based features.



