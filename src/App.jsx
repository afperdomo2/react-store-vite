import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
