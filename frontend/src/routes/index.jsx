import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Logout from "../components/Logout"
import Connect from "../pages/Connect"

const Routes = () => {
    const { token } = useAuth()

    const authRoutesOnly = [
        { 
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/logout",
                    element: <Logout />
                },
                {
                    path: "*",
                    element: <div>OPS page</div>
                }
            ]
        }
    ]

    const nonAuthRoutesOnly = [
        {
            path: "/connect",
            element: <Connect />
        },
        {
            path: "*",
            element: <Connect />
        }
    ]

    const router = createBrowserRouter(token ? authRoutesOnly : nonAuthRoutesOnly)

    return <RouterProvider router={router} />
}

export default Routes



