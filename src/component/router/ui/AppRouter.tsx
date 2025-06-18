import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {PageLoader} from "../../PageLoader/PageLoader";
import {routeConfig} from "../../../hooks/routeConfig/routeConfig";

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                    key={path}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
