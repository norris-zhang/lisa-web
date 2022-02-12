import Login from "../pages/auth/Login";
import Classes from "../components/teacher/Classes";
import Students from "../components/teacher/Students";
import NoMatch from "../pages/NoMatch";

const AppRoutes = () => {
    let routes = [
        {
            path: '/', element: <Login />,
            children: [
                {
                    path: 'classes', element: <Classes />,
                    children: [
                        // { index: true, element: <ClassesIndex /> },
                        { path: ':id', element: <Students /> }
                    ]
                },
                { path: '*', element: <NoMatch /> }
            ]
        }
    ];

    return routes;
};

export default AppRoutes;