import css from './LoadMoreBtn.module.css';
import { useSelector } from 'react-redux';
import { selectPage } from '../../redux/adverts/slice.js';
import clsx from 'clsx';

export default function LoadMoreBtn({ onClick }) {
  const page = useSelector(selectPage);

  return (
    <button
      className={clsx(css.loadMoreBtn, { [css.displayNone]: page === 5 })}
      type="button"
      onClick={onClick}
    >
      Load more
    </button>
  );
}
