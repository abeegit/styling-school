import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BiographyProps {}

const StyledDiv = styled.div`
  color: pink;

  ${(props) => props.className === 'job-title' ? `color: #999999; font-weight: bold;` : ''}
`;

const StyledH1 = styled.h1`
  color: #375e97;
  font-size: 2em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border-bottom: 1px solid #375e97;
`;

const StyledH2 = styled.h2`
  font-size: 1.5em;
`;

const StyledA = styled.a`
  :link,
  :visited {
    color: #fb6542;
  }
  :hover {
    text-decoration: none;
  }
`;

export function Biography(props: BiographyProps) {
  return (
    <>
      <StyledH1>Jane Doe</StyledH1>
      <StyledDiv className="job-title">Web Developer</StyledDiv>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
      </p>

      <StyledH2>Contact information</StyledH2>
      <ul>
        <li>Email:
          <StyledA href="mailto:jane@example.com">jane@example.com</StyledA>
        </li>
        <li>Web:
          <StyledA href="http://example.com">http://example.com</StyledA>
        </li>
        <li>Tel: 123 45678</li>
      </ul>
    </>
  );
}

export default Biography;
