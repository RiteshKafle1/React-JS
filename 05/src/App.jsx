import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "../src/pages/Home";
import Product from "../src/pages/Products";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Student from "./pages/student";
import Shoe from "./pages/Shoe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
``;
const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/product",
    element: (
      <div>
        <NavBar />
        <Product />
      </div>
    ),
    children: [
      {
        path: "shoe",
        element: <Shoe />,
      },
    ],
  },
  {
    path: "/contact",
    element: (
      <div>
        <NavBar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/student/:studentid",
    element: (
      <div>
        <NavBar />
        <Student />
      </div>
    ),
  },
  // error page
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
