import css from './Layout.module.css';
import Navigation from '../../components/Navigation/Navigation.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <main className={css.mainWrapper}>{children}</main>
      </div>
    </>
  );
}
