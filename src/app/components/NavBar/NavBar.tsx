import { Icon } from '../Icon';
import { StyledNavBar, Logo } from './NavBar.styled';
import logo from 'src/assets/logo.svg';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <StyledNavBar>
      <Logo src={logo} alt="Logo" />

      <Icon name="home" />
    </StyledNavBar>
  );
}

export default NavBar;
