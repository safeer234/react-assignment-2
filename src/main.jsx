
import * as React from "react";
import Root from './routes/Root.jsx';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Users from "./pages/Users.jsx";
import App from './App.jsx';
import UsersDetails from "./pages/UsersDetails.jsx";
import ErrorPage from './pages/ErrorPage.jsx';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
     children: [
      {index: true, element: <App />},
      {
        path: "/homes",
        element: <Home />,
      },
       {
        path: "/about",
        element: <About />,
      },
       {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/usersdetails/:id",
        element: <UsersDetails />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
