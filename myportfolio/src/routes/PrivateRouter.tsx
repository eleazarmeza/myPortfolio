import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
    return (
        <>
            <Header />
            <div className = 'm-10'></div>
            <Outlet /> 

        </>
    )
};




export default PrivateRouter;