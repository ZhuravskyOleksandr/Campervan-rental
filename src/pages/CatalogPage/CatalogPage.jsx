import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations.js';
import { resetPage, selectCampers } from '../../redux/adverts/slice.js';
import CampersList from '../../components/CampersList/CampersList.jsx';
import DocumentTitle from '../../shared/DocumentTitle/DocumentTitle.jsx';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchAdverts());
    dispatch(resetPage());
  }, [dispatch]);

  return (
    <div className={css.content}>
      <DocumentTitle>Campervan Rental - Catalog</DocumentTitle>
      {Array.isArray(campers) ? <CampersList campers={campers} /> : null}
    </div>
  );
}
