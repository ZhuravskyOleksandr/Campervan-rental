// import css from './FavoriteButton.module.css';
import { icons } from '../../assets/icons/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsFavorite,
  toggleFavorites,
} from '../../redux/adverts/slice.js';

export default function FavoriteButton({ camper }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camper));

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(toggleFavorites(camper));
      }}
    >
      <svg width="24" height="24">
        <use
          xlinkHref={
            isFavorite ? `${icons}#icon-heart-pressed` : `${icons}#icon-heart`
          }
        ></use>
      </svg>
    </button>
  );
}
