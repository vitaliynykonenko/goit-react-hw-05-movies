import PropTypes from 'prop-types';
import {Box} from './Container.styled';

export default function Container({ children }) {
  return <Box >{children}</Box>;
}

Container.propTypes = {
  children: PropTypes.node,
};
