// App.tsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
