import { useRoutes } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import BloggerDetails from "./pages/BloggerDetails";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

export default function Routes() {
  let element = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "blogdetails",
      element: <BlogDetails />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "bloggerdetails",
      element: <BloggerDetails />,
    },
  ]);

  return element;
}
