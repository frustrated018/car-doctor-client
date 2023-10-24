import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
      ]
    },
  ]);

  export default router;