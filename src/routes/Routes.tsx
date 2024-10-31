import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import DetailProduct from "../pages/DetailProduct";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
    ],
  },
];

export default routes;
