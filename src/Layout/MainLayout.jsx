import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div>this is the main Layout</div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;