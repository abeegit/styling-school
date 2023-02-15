import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchBarProps {}

const StyledSearchBar = styled.div`
  color: pink;
`;

export function SearchBar(props: SearchBarProps) {
  return (
    <StyledSearchBar>
      <h1>Welcome to SearchBar!</h1>
    </StyledSearchBar>
  );
}

export default SearchBar;
