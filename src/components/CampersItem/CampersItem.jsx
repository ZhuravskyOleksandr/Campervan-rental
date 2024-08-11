import css from './CampersItem.module.css';
import { icons } from '../../assets/icons/index.js';
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';
import Button from '../../shared/Button/Button.jsx';
import { useModal } from '../../hooks/useModal.jsx';
import { useCallback } from 'react';
import ModalMarkup from '../ModalMarkup/ModalMarkup.jsx';

export default function CampersItem({ camper }) {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<ModalMarkup camper={camper} onClose={closeModal} />);
  }, [setModal, closeModal, camper]);

  return (
    <div className={css.camperCard}>
      <div>
        <img
          className={css.camperImage}
          src={camper.gallery[0]}
          alt={camper.name}
          width={290}
          height={310}
        />
      </div>
      <div className={css.camperInfo}>
        <div className={css.nameWrapper}>
          <h2 className={css.camperName}>{camper.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.camperPrice}>€{camper.price.toFixed(2)}</p>
            <FavoriteButton camper={camper} />
          </div>
        </div>
        <div className={css.ratingWrapper}>
          <p className={css.camperRating}>
            <svg className={css.ratingStar} width="20" height="20">
              <use xlinkHref={`${icons}#icon-rating-star-filled`}></use>
            </svg>
            {camper.rating} ({camper.reviews.length} Reviews)
          </p>
          <p className={css.camperLocation}>
            <svg className={css.locationIcon} width="14" height="16">
              <use xlinkHref={`${icons}#icon-location`}></use>
            </svg>
            {camper.location}
          </p>
        </div>
        <p className={css.camperDescription}>{camper.description}</p>
        <FeaturesList camper={camper} />
        <Button className={css.showMoreBtn} onClick={openModal}>
          Show more
        </Button>
      </div>
    </div>
  );
}
