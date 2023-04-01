import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

//danh cho nhung Route khong dang nhap van xem duoc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//danh cho nhung Route dang nhap moi xem duoc -> chuyen sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
