import css from './Layout.module.css';
import Navigation from '../../components/Navigation/Navigation.jsx';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <main className={css.mainWrapper}>{children}</main>
    </div>
  );
}
