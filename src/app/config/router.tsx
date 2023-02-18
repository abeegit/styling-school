import { Home, Letter, GettingStartedWithCSS } from 'src/app/pages';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/letter',
    element: <Letter />
  },
  {
    path: 'getting-started-with-css',
    element: <GettingStartedWithCSS />
  }
]

export default createBrowserRouter(routes);