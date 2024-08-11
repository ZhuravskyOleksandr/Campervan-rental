import css from './CampersList.module.css';
import CampersItem from '../CampersItem/CampersItem.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectPage } from '../../redux/adverts/slice.js';
import Loader from '../../shared/Loader/Loader.jsx';
import { fetchMoreAdverts } from '../../redux/adverts/operations.js';
import { useEffect, useRef, useState } from 'react';

export default function CampersList({ campers }) {
  const campersListRef = useRef(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const [count, setCount] = useState(4);

  useEffect(() => {
    let timeoutId;

    if (count > 4) {
      timeoutId = setTimeout(() => {
        campersListRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }, 150);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  function handleLoadMore() {
    setCount(prevCount => prevCount + 4);
    dispatch(fetchMoreAdverts(page));
  }

  return (
    <section className={css.campersListWrapper}>
      <ul className={css.campersList} ref={campersListRef}>
        {campers.map(camper => (
          <li className={css.campersListItem} key={camper._id}>
            <CampersItem camper={camper} />
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {!isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
    </section>
  );
}
