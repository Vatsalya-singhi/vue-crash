import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About';
import Home from '../views/Home';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';

const routes = [
    {
        path: '/login',
        name: "login",
        component: Login,
    },
    {
        path: '/dashboard',
        name: "Dashboard",
        component: Dashboard,
        children: [
            {
                path: '',
                name: "Home",
                component: Home,
            },
            {
                path: 'about',
                name: "About",
                component: About,
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
})

export default router;






