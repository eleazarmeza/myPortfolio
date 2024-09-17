import { Amazon, Home, IOSapp, Network, Titanic, Videogame } from '../pages';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from './constants';


const routes: RouteObject[] = [
    { /* RENDERIZA EL ROUTER PRIVADO */
        path: ROUTES.HOME, element: <PrivateRouter />,
        children: [
            {path: ROUTES.HOME, element: <Home />},
            {path: ROUTES.IOSAPP, element: <IOSapp />},
            {path: ROUTES.AMAZON, element: <Amazon />},
            {path: ROUTES.NETWORK, element: <Network />},
            {path: ROUTES.VIDEOGAME, element: <Videogame />},
            {path: ROUTES.TITANIC, element: <Titanic />},


        ],
    },
    /*  si tengo varios routers, los pongo aqui:
    {
        path: 'admin', element: <AdminRouter />,
    }
    */
   {
    path: '/',
    element: <PublicRouter />,
    children: [{ path: '/', element: <Home /> }],
   },
];

export const router = createBrowserRouter(routes);