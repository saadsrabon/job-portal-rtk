import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import App from "../App";

const routes =createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App/>
            },
            {
                path: '/about',
                element: <h1>About</h1>
            }
        ]
    }
]);

export default routes;