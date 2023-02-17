import styled from 'styled-components';
import Letter from './pages/Home/Letter/Letter';
import './app.css';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Letter />
    </StyledApp>
  );
}

export default App;
