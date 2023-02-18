import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: red;
`;

const StyledParagraph = styled.p`
  color: green;
`;

export function GettingStartedWithCSS() {
  return (
    <>
    <StyledH1>I am a level one heading</StyledH1>

    <StyledParagraph>
      This is a paragraph of text. In the text is a
      <span>span element</span> and also a 
      <a href="https://example.com">link</a>.
    </StyledParagraph>

    <StyledParagraph>
      This is the second paragraph. It contains an <em>emphasized</em> element.
    </StyledParagraph>

    <ul>
      <li>Item <span>one</span></li>
      <li>Item two</li>
      <li>Item <em>three</em></li>
    </ul>
    </>
  );
}

export default GettingStartedWithCSS;
