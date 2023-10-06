import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error";
import Details from "../Pages/Details";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const rout = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/band.json')
            },
            {
                path: '/service/:id',
                element: <Details></Details>,
                loader: () => fetch('/band.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'login',
                element: <Login></Login>
            }
        ]
    }
])

export default rout;