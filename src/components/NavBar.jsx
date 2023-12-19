import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4';
  const filtersRoutes = [
    'all',
    'clothes',
    'electronics',
    'furnitures',
    'toys',
    'others',
  ];

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-5 py-5 text-sm font-light bg-red-50">
      <ul className="flex items-center gap-4">
        <li className="text-lg font-semibold">
          <NavLink to="/">Shopi</NavLink>
        </li>
        {filtersRoutes.map((route) => (
          <li key={route}>
            <NavLink
              to={`/${route}`}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-4">
        <li className="text-purple-500">contact@shopi.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-order"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            🛒0
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
