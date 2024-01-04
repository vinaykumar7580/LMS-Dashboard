import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Browse from "../Pages/Browse";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/browse" element={<Browse/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes