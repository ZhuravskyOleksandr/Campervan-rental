// import { icons } from '../../assets/icons/index.js';

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import Layout from '../../shared/Layout/Layout.jsx';

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
