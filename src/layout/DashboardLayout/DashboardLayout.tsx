import "./DashboardLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-layout__main">
                <Header />
                <div className="dashboard-layout__content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
