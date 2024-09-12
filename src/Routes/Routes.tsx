import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root"
const routes=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<h1>Murubbi murubbi. uhhhhhh.</h1>
    }
])


export default routes