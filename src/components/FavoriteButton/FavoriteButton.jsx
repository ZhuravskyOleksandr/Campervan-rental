import css from './FavoriteButton.module.css';
import { icons } from '../../assets/icons/index.js';

export default function FavoriteButton() {
  return (
    <button type="button">
      <svg className={css.icon} width="24" height="24">
        <use xlinkHref={`${icons}#icon-heart`}></use>
      </svg>
    </button>
  );
}
