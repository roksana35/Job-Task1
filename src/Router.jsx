import { createBrowserRouter } from "react-router-dom";
import Registion from "./Components/Registion";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Registion></Registion>
    }
])
export default router;