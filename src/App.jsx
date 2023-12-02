import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


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