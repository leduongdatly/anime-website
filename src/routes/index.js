import { NotHeaderLayout } from '~/components/Layout';
import Detail from '~/pages/Detail';
import Watch from '~/pages/Watch';
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import NotFoundAnime from '~/pages/NotFoundAnime';

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/page/:pagee', component: Home },
  { path: '/search', component: Search },
  { path: '/watch/:id/:page/episode/:ep', component: Watch, Layout: NotHeaderLayout },
  { path: '/detail/:id', component: Detail, Layout: NotHeaderLayout },
  { path: '/watch/not-found', component: NotFoundAnime, Layout: NotHeaderLayout },
  // { path: '/watch/:id', component: Watch, Layout: NotHeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
