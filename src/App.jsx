import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </>
    );
};

export default App