import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/slice.js';
import CampersItem from '../../components/CampersItem/CampersItem.jsx';
import { Link } from 'react-router-dom';
import DocumentTitle from '../../shared/DocumentTitle/DocumentTitle.jsx';

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);

  return (
    <section>
      <DocumentTitle>Campervan Rental - Favorites</DocumentTitle>
      {favorites.length > 0 ? (
        <ul className={css.favoritesList}>
          {favorites.map(favorite => (
            <li className={css.favoritesListItem} key={favorite._id}>
              <CampersItem camper={favorite} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.emptyWrapper}>
          <img
            className={css.img}
            src="/src/assets/images/van-8150456_640-min.png"
            alt="Campervan in the mountains"
          />
          <h2 className={css.title}>Your Favorites List is Currently Empty</h2>
          <p className={css.text}>
            Check out our wide range of campers to find the perfect one for your
            next trip. Add it to your favorites to easily find them later!
          </p>
          <Link className={css.link} to="/catalog">
            View campers
          </Link>
        </div>
      )}
    </section>
  );
}
