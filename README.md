# 🏨 Hotel Management App

A full-featured hotel management dashboard for internal use by hotel staff. This app streamlines daily operations including cabin management, bookings, guest data, check-ins, check-outs, and more — all secured behind authentication.

🔗 liveDemo: https://hotel-management-dun.vercel.app/dashboard

---

## 🚀 Features

### 🔐 Authentication
- Login required for all features
- Users can only sign up from within the app
- Manage personal account settings (avatar, name, password)

### 📊 Dashboard `/dashboard`
- Guests checking in and out today (with action buttons)
- Metrics for last 7 / 30 / 90 days: 
  - Bookings, sales, check-ins, occupancy rate
- Sales chart (total + extras like breakfast)
- Stay duration chart

### 📅 Bookings `/bookings`
- Table view of all bookings with:
  - Dates, guest/cabin info, status, paid amount
- Filter by booking status: unconfirmed, checked in, checked out
- Actions: delete, check in, check out

### 🏠 Cabins `/cabins`
- Table of cabins with:
  - Photo, name, capacity, price, discount
- Full CRUD support
- Upload cabin photos

### ✅ Check-In Flow `/checkin/:bookingId`
- Confirm payment (outside app)
- Optionally add breakfast
- Finalize check-in

### 👤 Guests
- Stored per booking:
  - Full name, email, national ID, nationality
  - Country flag for quick identification

### ⚙️ App Settings `/settings`
- Admin-defined values:
  - Breakfast price
  - Min/max nights per booking
  - Max guests per booking

### 🙋 Account Settings `/account`
- Update user name, password, avatar

### 🌙 Dark Mode
- Toggle between light and dark mode

---

## 📄 Pages & Routes

| Page                 | Route Path              |
|----------------------|--------------------------|
| Dashboard            | `/dashboard`             |
| Bookings             | `/bookings`              |
| Cabins               | `/cabins`                |
| Booking Check-in     | `/checkin/:bookingId`    |
| App Settings         | `/settings`              |
| User Sign Up         | `/users`                 |
| Login                | `/login`                 |
| Account Settings     | `/account`               |

---

## 🧰 Tech Stack

| Category            | Tool/Library           |
|---------------------|------------------------|
| Routing             | React Router DOM       |
| Styling             | Styled Components      |
| Remote State        | React Query            |
| UI State Management | React Context API      |
| Form Management     | React Hook Form        |
| Charts & Graphs     | Recharts               |
| Utilities           | date-fns, React Icons  |
| Notifications       | React Toastify         |
| Backend             | Supabase               |

---

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/Ma7moud-Emad/hotel-management.git
   cd hotel-management-app
