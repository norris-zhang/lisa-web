import NoMatch from "../pages/NoMatch";
import LoginWrapper from "../pages/auth/LoginWrapper";
import ClassesPage from "../pages/classes/ClassesPage";

const AppRoutes = () => {
    let routes = [
        {
            path: '/', element: <LoginWrapper />
            // children: [
            //     {
            //         path: 'classes', element: <ClassesPage />,
            //         children: [
            //             // { index: true, element: <ClassesIndex /> },
            //             { path: ':id', element: <Students /> }
            //         ]
            //     },
            //     { path: '*', element: <NoMatch /> }
            // ]
        },
        { path: '/classes', element: <ClassesPage /> },
        { path: '*', element: <NoMatch /> }
    ];

    return routes;
};

export default AppRoutes;