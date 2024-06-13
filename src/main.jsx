import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import ShowBlogs from "./ShowBlogs/ShowBlogs";
import Content from "./Components/Contant/Content";
import Author from "./Components/Author/Author";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path:"/Blogs",
    loader:() => fetch('https://dev.to/api/articles?per_page=20&top=7'),
   element: <Blogs></Blogs>,
  },
  {
    path:"/blog/:id",
    element:<ShowBlogs></ShowBlogs>,
    loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
  children:[
    {
      index:true,
      element:<Content></Content>
    },
    {
      path:"author",
      element:<Author></Author>,
      loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
    }
  ]
  },
  {
   path:"/Bookmarks",
   element:<Bookmarks></Bookmarks>,
   loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);