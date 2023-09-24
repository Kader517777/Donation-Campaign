import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Main = () => {
    return (
        <>
            <Navber></Navber>
            <Outlet></Outlet>
        </>
    );
};

export default Main;