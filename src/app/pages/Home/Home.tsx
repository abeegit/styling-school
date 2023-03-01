import Link from 'src/app/components/Link/Link';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

const StyledUnorderedList = styled.ul`
  list-style-type: decimal;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Styling Classroom</h1>

      <StyledUnorderedList>
        <li><Link href='/letter'>Letter</Link></li>
        <li><Link href="/getting-started-with-css">Getting started with CSS</Link></li>
        <li><Link href='/biography'>Biography</Link></li>
        <li><Link href='/flexbox'>Flex Box</Link></li>
      </StyledUnorderedList>
    </StyledHome>
  );
}

export default Home;
