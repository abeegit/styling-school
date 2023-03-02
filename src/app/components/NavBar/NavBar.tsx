import { Icon } from '../Icon';
import { StyledNavBar, StyledA } from './NavBar.styled';
import logo from 'src/assets/logo.svg';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavLogo() {
  return (
    <StyledA href="/"><img src={logo} alt="Logo" /></StyledA>
  );
}

export function NavBar(props: NavBarProps) {
  return (
    <StyledNavBar>
      

      <Icon name="home" />
    </StyledNavBar>
  );
}

export default NavBar;
