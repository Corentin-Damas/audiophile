import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Error from "./components/ui/Error";
import Home from "./components/Home";
import Headphones from "./components/Headphones";
import { loader as itemLoader } from "./components/ProductContent";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import ProductDetail from "./components/ProductDetail";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/headphones",
        element: <Headphones />,
        loader: itemLoader,
        errorElement: <Error />,
      },
      {
        path: "/speakers",
        element: <Speakers />,
        loader: itemLoader,
        errorElement: <Error />,
      },
      {
        path: "/earphones",
        element: <Earphones />,
        loader: itemLoader,
        errorElement: <Error />,
      },
      {
        path: "/:productSlug",
        element: <ProductDetail />,
        loader: itemLoader,
        errorElement: <Error />,
        // action: updateOrderAction,
      },
    ],
  },
]);

function App() {

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
