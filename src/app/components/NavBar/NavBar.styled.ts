import styled from 'styled-components';

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  max-width: 1200px;
  margin: auto;
`;

export const StyledA = styled.a({
  width: '200px',
  height: '100px',
  'img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'hidden'
  }
})
  
