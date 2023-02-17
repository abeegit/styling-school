import styled from 'styled-components';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface DateProps {}

const StyledDate = styled.div`
  margin: 20px 0;
  text-align: right;
`;

export function Date(props: PropsWithChildren<DateProps>) {
  return (
    <StyledDate>
      {props.children}
    </StyledDate>
  );
}

export default Date;
