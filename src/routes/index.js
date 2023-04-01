import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';

//danh cho nhung Route khong dang nhap van xem duoc
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//danh cho nhung Route dang nhap moi xem duoc -> chuyen sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
