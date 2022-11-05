import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import noPhoto from '../../images/broken_img.png';
import { Box, Item, Poster, Title} from './MoviesList.styled';

const MovieList = ({ movies, prevLocation }) => {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      <Box>
        {movies.map(({ id, original_title, poster_path }) => (
          <Item key={id} >
            <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
            <Poster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : noPhoto
                }
                  alt={`${movies.title} portrait`}
              />
             
              <Title>{original_title}</Title>
            </Link>
          </Item>
        ))}
      </Box>
    </>
  );
};

MovieList.propTypes = {
  // prevLocation: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MovieList;
