import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import MyProjects from "../Pages/MyProjects/MyProjects";
import Contact from "../Pages/Contact/Contact";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/myprojects',
            element:<MyProjects></MyProjects>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }

      ],



    },
  ]);
export default routes;