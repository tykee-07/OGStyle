import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import InfoKros from "./pages/InfoKros";
import Info from "./components/Info/Info";
import Search from "./pages/Search";


const myRouter=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"regicter",
                element:<Register/>
            },
            {
                path:"info/:id",
                element:<Info/>
            },
            {
                path:"infoKros",
                element:<InfoKros/>
            },
            {
                path:"search",
                element:<Search/>
            },
        ]
    }
])
export default myRouter
