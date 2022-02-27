import React from "react";
import Students from "../components/teacher/Students";
import LoginWrapper from "../pages/auth/LoginWrapper";
import ClassesPage from "../pages/classes/ClassesPage";
import NoMatch from "../pages/NoMatch";

const AppRoutes = [
    {
        path: '/', element: <LoginWrapper />,
        children: [
            {index: true, element: <ClassesPage />},
            {
                path: 'classes', element: <ClassesPage />,
                children: [
                    // { index: true, element: <ClassesIndex /> },
                    { path: ':id', element: <Students /> }
                ]
            },
            { path: '*', element: <NoMatch /> }
        ]
    },
    // { path: '/home', element: <ClassesPage /> },
    { path: '*', element: <NoMatch /> }
];

export const LayoutRoutes = [
    {index: true, element: <ClassesPage />},
    {path: '/class/:id', element: <Students />}
];

export default AppRoutes;