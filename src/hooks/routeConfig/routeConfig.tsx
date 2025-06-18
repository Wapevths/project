import { RouteProps } from 'react-router-dom';
import {MainPage} from "../../pages/MainPage";
import {FavoritePage} from "../../pages/FavoritePage";
import {PhotoPage} from "../../pages/PhotoPage";
import {NotFoundPage} from "../../pages/NotFoundPage";

export enum AppRoutes {
    MAIN = 'main',
    FAVORITE = 'favorite',
    PHOTOS = 'photos',
    NOT_FOUND_PAGE = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FAVORITE]: '/favorite',
    [AppRoutes.PHOTOS]: '/photo/:id',
    [AppRoutes.NOT_FOUND_PAGE]: '*',

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.FAVORITE]: {
        path: RoutePath.favorite,
        element: <FavoritePage />,
    },
    [AppRoutes.PHOTOS]: {
        path: RoutePath.photos,
        element: <PhotoPage />,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
