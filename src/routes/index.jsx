import { createBrowserRouter } from "react-router-dom";

/* */
import { DashboardAsideMenu } from "@/constants";

/* Layouts Loading */
import { AuthLayout, DashboardLayout } from "@/layouts";


/* */
import { ForgotPassword, Login, Otp } from "@/pages/Authentication";
import { PasswordUpdateSuccess } from "@/components/Authentication/PasswordUpdate";

/* */
import {
  Dashboard,
  Settings,
  Notifications,
  ChatRoom,
} from "@/pages/Main";

const TeamCollaborationRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <DashboardLayout items={DashboardAsideMenu} />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "chat-room",
              element: <ChatRoom />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "otp",
              element: <Otp />,
            },
            {
              path: "passwordupdate",
              element: <PasswordUpdateSuccess />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default TeamCollaborationRoute;
