import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root"
import Home from "../Components/Pages/Home/Home";
import Dashboard from "../Components/Pages/Dashbaord/Dashboard";
const routes=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        // errorElement:<h1>Murubbi murubbi. uhhhhhh.</h1>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            }
        ]
    }
])


export default routes