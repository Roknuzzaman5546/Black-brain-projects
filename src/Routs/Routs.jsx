import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error";
import Details from "../Pages/Details";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Privateraout from "../Privateraout/Privateraout";
import About from "../Pages/About/About";
import Book from "../Pages/Book/Book";
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
                path: '/about',
                element: <About></About>,
                loader: () => fetch('/band.json')
            },
            {
                path: '/book',
                element: <Book></Book>
            },
            {
                path: '/service/:id',
                element: <Privateraout><Details></Details></Privateraout>,
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