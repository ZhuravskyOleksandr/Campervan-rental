// import css from './CatalogPage.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations.js';
import { selectCampers, selectIsLoading } from '../../redux/adverts/slice.js';
import CampersList from '../../components/CampersList/CampersList.jsx';
import Loader from '../../shared/Loader/Loader.jsx';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading & Array.isArray(campers) ? (
        <CampersList campers={campers} />
      ) : null}
    </div>
  );
}
