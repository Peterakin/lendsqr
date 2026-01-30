import { ArrowBigDown, ArrowDown, ArrowDown01, ArrowDownSquare, ArrowLeftRight, BadgePercent, BookDown, Briefcase, ChartColumnIncreasing, ChevronDown, Clipboard, Coins, DownloadCloud, FileDown, HandCoins, Handshake, Home, Landmark, LoaderPinwheel, MoveDown, MoveDownIcon, PiggyBank, Scroll, SlidersHorizontal, User, User2, UserCog, UserRoundCheck, UserRoundX, Users, Wallet } from "lucide-react";
import "./Sidebar.scss";

type MenuItem = {
    label: string,
    icon: JSX.Element;
}

type MenuSection = {
    title: string;
    items: MenuItem[];
}

const menu: MenuSection[] = [
    {
        title: "",
        items: [
            { label: "Dashboard", icon: <Home size={16} /> },
        ],
    },
    {
        title: "CUSTOMERS",
        items: [
            { label: "User", icon: <User size={16} /> },
            { label: "Guarantor", icon: <Users size={16} /> },
            { label: "Loan", icon: <Wallet size={16} /> },
            { label: "Decision Model", icon: <Handshake size={16} /> },
            { label: "Savings", icon: <PiggyBank size={16} /> },
            { label: "Loan Request", icon: <HandCoins size={16} /> },
            { label: "Whitelist", icon: <UserRoundCheck size={16} /> },
            { label: "Karma", icon: <UserRoundX size={16} /> }
        ]
    },
    {
        title: "BUSINESSES",
        items: [
            { label: "Organization", icon: <Briefcase size={16} /> },
            { label: "Loan Products", icon: <HandCoins size={16} /> },
            { label: "Savings Products", icon: <Landmark size={16} /> },
            { label: "Fees and Charges", icon: <Coins size={16} /> },
            { label: "Transactions", icon: <ArrowLeftRight size={16} /> },
            { label: "Services", icon: <LoaderPinwheel size={16} /> },
            { label: "Service Acount", icon: <UserCog size={16} /> },
            { label: "Settlements", icon: <Scroll size={16} /> },
            { label: "Reports", icon: <ChartColumnIncreasing size={16} /> }
        ]
    },
    {
        title: "SETTINGS",
        items: [
            { label: "Preference", icon: <SlidersHorizontal size={16} /> },
            { label: "Fees and Pricing", icon: <BadgePercent size={16} /> },
            { label: "Audit Logs", icon: <Clipboard size={16} /> }
        ]
    }
]
interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className = "" }: SidebarProps) => {

    return (
        <aside className={`sidebar ${className}`}>
            <div className="sidebar__top">
                <span className="sidebar__switch">
                    <Briefcase size={16} /> Switch Organization<ChevronDown />
                </span>
            </div>

            {menu.map((section, i) => (
                <div key={i} className="sidebar__section">
                    {section.title && (
                        <p className="sidebar__title">{section.title}</p>
                    )}

                    {section.items.map((item, idx) => (
                        <div key={idx} className={`sidebar__item ${item.label === "Users" ? "active" : ""}`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            ))}
        </aside>
    )
}

export default Sidebar