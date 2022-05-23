import { NotHeaderLayout } from '~/components/Layout';
import AnimeDetail from '~/pages/AnimeDetail';
import Home from '~/pages/Home';
import Search from '~/pages/Search';

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/page/:pagee', component: Home },
  { path: '/search', component: Search },
  { path: '/anime/:id', component: AnimeDetail, Layout: NotHeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
