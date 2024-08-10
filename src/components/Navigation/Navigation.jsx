import css from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

function navLinkClasses({ isActive }) {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
}

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink to={'/'} className={navLinkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/catalog'} className={navLinkClasses}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to={'/favorites'} className={navLinkClasses}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
