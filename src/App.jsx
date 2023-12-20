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

/**
 * Renderiza las rutas de la aplicación.
 * @returns {JSX.Element} Las rutas renderizadas.
 */
const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
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
        </GlobalLayout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
