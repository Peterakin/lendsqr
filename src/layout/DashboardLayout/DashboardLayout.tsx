import "./DashboardLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div>
            <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="dashboard-layout">
                <Sidebar className={isSidebarOpen ? "open" : ""} />

                <div className="dashboard-layout__main">
                    <div className="dashboard-layout__content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
