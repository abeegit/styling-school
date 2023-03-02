import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FlexBoxProps {}

const StyledFlexBox = styled.div`
  color: pink;
`;

export function FlexBox(props: FlexBoxProps) {
  return (
    <StyledFlexBox>
    </StyledFlexBox>
  );
}

export default FlexBox;
