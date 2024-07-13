import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthLayout from "./components/AuthLayout";
import BlogDetails from "./pages/BlogDetails";
import BloggerDetails from "./pages/BloggerDetails";
import ContactUsPage from "./pages/ContactUs";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = new createBrowserRouter({
  path: "/",
  element: <LandingPage />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: (
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      ),
    },
    {
      path: "/login",
      element: (
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/blogdetails",
      element: (
        <AuthLayout authentication>
          <BlogDetails />
        </AuthLayout>
      ),
    },
    {
      path: "/bloggerdetails",
      element: (
        <AuthLayout authentication>
          <BloggerDetails />
        </AuthLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <AuthLayout authentication>
          <ContactUsPage />
        </AuthLayout>
      ),
    },
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
