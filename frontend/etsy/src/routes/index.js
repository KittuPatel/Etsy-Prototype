import Register from '../components/Register';
import Login from '../components/Login';
import App from '../components/App';
import ShopName from '../components/ShopName';

const routes = [
    {
        path: '/auth/register',
        component: Register,
        title: 'Register',
    },
    {
        path: '/auth/login',
        component: Login,
        title: 'Login',
    },
    {
        path: '/',
        component: App,
        title: 'Etsy',
    },
    {
        path: '/create-shop',
        component: ShopName,
        title: 'Create Shop',
    },
]

export default routes