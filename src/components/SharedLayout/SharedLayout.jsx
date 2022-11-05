import {Link} from './SharedLayout.styled';


const Navigation = () => (
  <nav>
    <Link to="/" end >
      Home
    </Link>

    <Link to="/movies">
      Movies
    </Link>
  </nav>
);

export default Navigation;
