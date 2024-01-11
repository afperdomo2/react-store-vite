import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import GlobalLayout from './components/layouts/GlobalLayout';
import { ShoppingCartProvider } from './context';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import MyOrder from './pages/MyOrder';
import MyOrders from './pages/MyOrders';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import MenuCart from './components/MenuCart';

/**
 * Renderiza las rutas de la aplicación.
 * @returns {JSX.Element} Las rutas renderizadas.
 */
const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <GlobalLayout>
          <NavBar />
          <AppRoutes />
          <MenuCart />
        </GlobalLayout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
