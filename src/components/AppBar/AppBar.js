import {Header} from './AppBar.styled';
import Navigation from 'components/SharedLayout/SharedLayout';
import Container from 'components/Container/Container';

export default function Appbar() {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
}
