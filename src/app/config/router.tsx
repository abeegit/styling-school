import { Home, Letter, GettingStartedWithCSS, Biography } from 'src/app/pages';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import FlexBox from '../pages/FlexBox/FlexBox';

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
  },
  {
    path: '/flexbox',
    element: <FlexBox />
  }
]

export default createBrowserRouter(routes);