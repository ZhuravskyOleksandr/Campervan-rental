import Layout from '../../shared/Layout/Layout.jsx';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import { Toaster } from 'react-hot-toast';
import HourglassLoader from '../../shared/HourglassLoader/HourglassLoader.jsx';

const CatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage.jsx')
);
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage.jsx')
);

export default function App() {
  return (
    <Layout>
      <Toaster />
      <Suspense fallback={<HourglassLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
