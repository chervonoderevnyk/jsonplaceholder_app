import {createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "./lauoyts/MainLayout";




const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [


            // { index: true, element: <Navigate to={'movies'} /> },
            // { path: 'movies', element: <MoviesPage /> },
            // { path: 'list/:list_id', element: <GenreListPage /> },
            // { path: 'movie/:movie_id', element: <MovieDetailsPage /> }
        ]
    }
]);

export {
    router
};
