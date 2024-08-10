import css from './ReviewsList.module.css';
import ReviewsItem from '../ReviewsItem/ReviewsItem.jsx';

export default function ReviewsList({ camper }) {
  return (
    <div className={css.reviews}>
      <ul className={css.reviewList}>
        {camper.reviews.map(review => (
          <li key={review.reviewer_name}>
            <ReviewsItem review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
