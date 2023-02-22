import { StyledContainer, StyledH1, StyledDiv, StyledP, StyledH2, StyledUl, StyledA } from "./Biography.styled";


export function Biography() {
  return (
    <StyledContainer>
      <StyledH1>Jane Doe</StyledH1>
      <StyledDiv className="job-title">Web Developer</StyledDiv>
      <StyledP>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</StyledP>

      <StyledP>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
      </StyledP>

      <StyledH2>Contact information</StyledH2>
      <StyledUl>
        <li>Email:
          <StyledA href="mailto:jane@example.com">jane@example.com</StyledA>
        </li>
        <li>Web:
          <StyledA href="http://example.com">http://example.com</StyledA>
        </li>
        <li>Tel: 123 45678</li>
      </StyledUl>
    </StyledContainer>
  );
}

export default Biography;
