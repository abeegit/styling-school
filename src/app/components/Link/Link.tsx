import { PropsWithChildren } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LinkProps {
  decoration?: boolean;
  href: string;
}

const StyledLink = styled.a<React.HTMLProps<HTMLAnchorElement> & LinkProps>`
  text-decoration: ${(props) => props.decoration ? 'underline' : 'none'};
  color: ${(props) => props.decoration ? 'var(--link-color)' : 'inherit'};
`;

export function Link({ children, decoration = true, href }: PropsWithChildren<LinkProps>) {
  return (
    <StyledLink href={href} decoration={decoration}>
      {children}
    </StyledLink>
  );
}

export default Link;
