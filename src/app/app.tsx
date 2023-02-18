import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import router from './config/router';

import './app.css';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
}

export default App;
