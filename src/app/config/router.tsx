import { Home, Letter, GettingStartedWithCSS, Biography } from 'src/app/pages';
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
  },
  {
    path: '/biography',
    element: <Biography />
  }
]

export default createBrowserRouter(routes);