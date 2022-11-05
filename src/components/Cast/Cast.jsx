import { CastList, CastItem } from './Cast.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/movies-api';
import noPhoto from '../../images/broken_img.png';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesCredits(movieId);
        setCast(res);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <CastList >
        {cast.map(castItem => {
          return (
            <CastItem key={castItem.id} >
              <img
                src={
                  castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w300${castItem.profile_path}`
                    : noPhoto
                }
                alt={`${castItem.name} portrait`}
              />
              <div>
                <p>Name: {castItem.name}</p>
                <p>Character: {castItem.character}</p>
              </div>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
