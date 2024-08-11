import css from './ModalMarkup.module.css';
import { icons } from '../../assets/icons/index.js';
import { useState } from 'react';
import clsx from 'clsx';
import BookingForm from '../BookingForm/BookingForm.jsx';
import FeatureTab from '../FeatureTab/FeatureTab.jsx';
import ReviewsList from '../ReviewsList/ReviewsList.jsx';

export default function ModalMarkup({ camper, onClose }) {
  const [tab, setTab] = useState('features');

  return (
    <div className={css.modal}>
      <button className={css.closeBtn} onClick={onClose}>
        <svg width="32" height="32">
          <use xlinkHref={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={css.camperName}>{camper.name}</h2>
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
      <p className={css.camperPrice}>€{camper.price.toFixed(2)}</p>
      <ul className={css.camperGallery}>
        {Array.isArray(camper.gallery) &&
          camper.gallery.map(image => (
            <li key={image}>
              <img
                className={css.camperImage}
                src={image}
                alt="camper detailed image"
                width={290}
                height={310}
              />
            </li>
          ))}
      </ul>
      <p className={css.camperDescription}>{camper.description}</p>
      <div className={css.tabsWrapper}>
        <button
          className={clsx(css.tab, tab === 'features' && css.active)}
          type="button"
          onClick={() => {
            setTab('features');
          }}
        >
          Features
        </button>
        <button
          className={clsx(css.tab, tab === 'reviews' && css.active)}
          type="button"
          onClick={() => {
            setTab('reviews');
          }}
        >
          Reviews
        </button>
      </div>
      <div className={css.detailedInfo}>
        {tab === 'features' ? (
          <FeatureTab camper={camper} />
        ) : (
          <ReviewsList camper={camper} />
        )}
        <BookingForm />
      </div>
    </div>
  );
}
