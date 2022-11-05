import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Appbar from './AppBar/AppBar';
// import NotFoundView from 'ui/NotFoundView';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));

export const App = () => {
  return (
    <>
      <Appbar />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
