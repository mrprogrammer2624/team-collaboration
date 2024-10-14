# Team Collaboration Hub

## Overview

Team Collaboration Hub is a comprehensive web application designed to enhance team productivity and communication. It features task management, real-time chat, and user authentication, all wrapped in a user-friendly and responsive interface.

Live Demo: []()

## Features

1. **Authentication & User Interface**
   - Login and Registration pages
   - User Dashboard with tasks and recent activities
   - Admin Dashboard for user and task management

2. **Task Management**
   - Create, update, and delete tasks
   - Filter tasks by status, priority, and due date

3. **Real-Time Chat**
   - Chat component using Socket.IO
   - Multiple project channels

4. **Responsive Design**
   - Mobile-friendly interface using Ant Design components

5. **State Management**
   - Utilizes React Redux for global state management

## Technologies Used

- React (with Vite as build tool)
- Ant Design (antd)
- CSS for custom styling
- React Redux for state management
- Axios for API integration
- Socket.IO for real-time communication

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/mrprogrammer2624/team-collaboration.git
   ```

2. Navigate to the project directory:
   ```
   cd team-collaboration/frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root of the frontend directory and add the following:
   ```
   VITE_API_URL=your_backend_api_url
   VITE_SOCKET_URL=your_socket_server_url
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` to view the application.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Dashboard/
│   │   │   ├── UserDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── Tasks/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskFilter.jsx
│   │   └── Chat/
│   │       ├── ChatRoom.jsx
│   │       └── ChatMessage.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── authSlice.js
│   │   ├── taskSlice.js
│   │   └── chatSlice.js
│   ├── services/
│   │   ├── api.js
│   │   └── socket.js
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Usage

### Authentication

- Use the Registration page to create a new account.
- Log in using your credentials on the Login page.

### Dashboard

- The User Dashboard displays your tasks and recent activities.
- Admins have access to an additional Admin Dashboard for user and task management.

### Task Management

- Create new tasks using the task creation form.
- Update or delete tasks as needed.
- Use filters to sort tasks by status, priority, or due date.

### Real-Time Chat

- Access the chat feature from the dashboard.
- Select a project channel to start chatting in real-time with team members.

## API Integration

The frontend uses Axios to communicate with the backend API. API calls are centralized in the `src/services/api.js` file.

## Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Fork this repository.
2. Sign up for a Vercel account and connect it to your GitHub.
3. Create a new project in Vercel and select the forked repository.
4. Configure the environment variables in Vercel's project settings.
5. Deploy the project.

## Contributing

Contributions to improve the Team Collaboration Hub are welcome. Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## License

This project is open-source and available under the MIT License.