import styled from 'styled-components';

export const StyledContainer = styled.div`
  font-family: Inter, "system-ui", "Segoe UI", "Roboto";
`;

export const StyledDiv = styled.div`
  color: pink;

  ${(props) => props.className === 'job-title' ? `color: #999999; font-weight: bold; font-size: 1.2em;` : ''}
`;

export const StyledH1 = styled.h1`
  color: hotpink;
  font-size: 2em;
  border-bottom: 10px dotted #800080;
`;

export const StyledH2 = styled.h2`
  font-size: 1.5em;
  font-style: italic;
`;

export const StyledP = styled.p`
  font-size: 1.2em;
`;

export const StyledA = styled.a`
  margin: 0 0 0 5px;
  :link,
  :visited {
    color: #fb6542;
  }
  :hover {
    text-decoration: none;
  }
`;

export const StyledUl = styled.ul`
  padding: 2em 2em;
  border: 5px solid #800080;
  list-style-position: inside;
  background-color: #eeeeee;
`;