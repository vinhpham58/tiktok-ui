import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

//danh cho nhung Route khong dang nhap van xem duoc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//danh cho nhung Route dang nhap moi xem duoc -> chuyen sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
