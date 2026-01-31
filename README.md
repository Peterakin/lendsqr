📊 Users Management Dashboard

A responsive Users Management Dashboard built with React, TypeScript, and SCSS, featuring data fetching, filtering, pagination, and user detail views. This project demonstrates clean component architecture, state management, and real-world UI patterns commonly used in admin dashboards.

🚀 Features

📋 Display users in a structured table

🔍 Filter users by:

Organization

Username

Email

Status

Date joined

📄 Pagination with configurable items per page

👁 View individual user details

🎯 Action menu (View, Activate, Blacklist)

📱 Fully responsive (mobile, tablet, desktop)

⚡ Fast mock API integration

💡 Clean TypeScript typings

🛠 Tech Stack

Frontend: React + TypeScript

Styling: SCSS (modular & responsive)

Routing: React Router DOM

HTTP Requests: Axios

Icons: Lucide React

Mock API: Mocki.io

📂 Project Structure
src/
│
├── components/
│ ├── FilterModal/
│ └── Sidebar/
| |\_\_ Header/
│
├── layout/
│ └── DashboardLayout/
│
├── pages/
│ ├── Users/
│ ├── UserDetails/
│ └── Login/
│
├── types/
│ ├── user.ts
│
│
├── App.tsx
└── main.tsx

📡 API Used

User data is fetched from a mock API:

https://mocki.io/v1/5b30cd42-1916-438a-9aa0-4772a9ae43e0

The API returns a list of users with details such as organization, email, phone number, status, and date joined.

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Peterakin/lendsqr-fe-test

2️⃣ Navigate to the project folder
cd lendsqr-fe-test

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev

The app will run at:

http://localhost:5173

🧪 Key Functionalities Explained
Filtering

Filters are applied client-side using controlled inputs.

Users can reset or apply filters via a modal interface.

Pagination

Dynamic pagination based on filtered results.

Adjustable page size (10, 50, 100).

Responsiveness

Desktop: full table view

Mobile: stacked table rows (no horizontal scrolling)

Touch-friendly action menu

🧩 Improvements & Future Enhancements

🔐 Authentication & role-based access

🌐 Real backend integration

🧠 Server-side filtering & pagination

📊 Analytics dashboard

🌓 Dark mode support

🧪 Unit & integration tests

👨‍💻 Author

Peter Akinlosotu
Frontend Developer
📍 Abuja, Nigeria

📄 License

This project is open-source and available for learning and portfolio purposes.
