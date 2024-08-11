import css from './HomePage.module.css';
import DocumentTitle from '../../shared/DocumentTitle/DocumentTitle.jsx';

export default function HomePage() {
  return (
    <section className={css.home}>
      <DocumentTitle>Campervan Rental</DocumentTitle>
      <h1 className={css.text}>
        Embark on an unforgettable adventure with our campervans! Discover the
        freedom to travel without restrictions and choose a campervan that will
        be your perfect companion on any trip. Welcome to the world of comfort
        and independence on wheels!
      </h1>
    </section>
  );
}
