import { Database, Eye, File, ListFilter, MoreVertical, UserRoundCheck, UserRoundPlus, Users2 } from "lucide-react";
import "./UsersPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import type { User, UserResponse } from "../../types/user";
import FilterModal from "../../components/FilterModal/FilterModal";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [openAction, setOpenAction] = useState<number | null>(null);
    const navigate = useNavigate();
    const [showFilter, setShowFilter] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const [filters, setFilters] = useState({
        organization: "",
        username: "",
        email: "",
        dateJoined: "",
        status: "",
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get<UserResponse>(
                    "https://mocki.io/v1/4f7dfa1c-b8a8-4501-ac33-87523f68808e"
                );

                setUsers(res.data.users);
                setFilteredUsers(res.data.users);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleApplyFilter = () => {
        let temp = [...users];

        if (filters.organization) {
            temp = temp.filter((u) =>
                u.organization.toLowerCase().includes(filters.organization.toLowerCase())
            );
        }

        if (filters.username) {
            temp = temp.filter((u) =>
                u.username.toLowerCase().includes(filters.username.toLowerCase())
            );
        }

        if (filters.email) {
            temp = temp.filter((u) =>
                u.email.toLowerCase().includes(filters.email.toLowerCase())
            );
        }

        if (filters.status) {
            temp = temp.filter((u) => u.status === filters.status);
        }

        setFilteredUsers(temp);
        setShowFilter(false);
    };

    const handleResetFilter = () => {
        setFilters({
            organization: "",
            username: "",
            email: "",
            dateJoined: "",
            status: "",
        });
        setFilteredUsers(users);
        setShowFilter(false);
    };


    if (loading) return <p>Loading...</p>;

    return (
        <div className="users__page">
            <h2>Users</h2>

            <div className="cards">
                <div className="card">
                    <div className="card__icon"><Users2 size={16} /></div>
                    <p className="card__title">USERS</p>
                    <p className="card__value">2,453</p>
                </div>
                <div className="card">
                    <div className="card__icon1"><Users2 size={16} /></div>
                    <p className="card__title">ACTIVE USERS</p>
                    <p className="card__value">2,453</p>
                </div>
                <div className="card">
                    <div className="card__icon2"><File size={16} /></div>
                    <p className="card__title">USERS WITH LOANS</p>
                    <p className="card__value">12,453</p>
                </div>
                <div className="card">
                    <div className="card__icon3"><Database size={16} /></div>
                    <p className="card__title">USERS WITH SAVINGS</p>
                    <p className="card__value">102,453</p>
                </div>
            </div>

            <div className="users__table__wrapper">
                <table className="users__table">
                    <thead>
                        <tr>
                            {[
                                "Organization",
                                "Username",
                                "Email",
                                "Phone",
                                "Date Joined",
                                "Status",
                            ].map((title, i) => (
                                <th key={i}>
                                    <div className="user__table__header">
                                        <span>{title}</span>
                                        <ListFilter size={14} onClick={() => setShowFilter(true)} />
                                    </div>
                                </th>
                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.organization}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{new Date(user.dateJoined).toLocaleString()}</td>
                                <td>
                                    <span className={`status ${user.status}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="action">
                                    <MoreVertical size={16} onClick={() => setOpenAction(openAction === index ? null : index)} />
                                    {openAction === index && (
                                        <div className="action__dropdown">
                                            <p onClick={() => navigate(`/users/${user.id}`)}><Eye size={16} /> View Details</p>
                                            <p><UserRoundPlus size={16} /> Blacklist User</p>
                                            <p><UserRoundCheck size={16} /> Activate User</p>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="table__pagination">
                <div className="pagination__left">
                    <span>Showing</span>

                    <select>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>

                    <span>out of 100</span>
                </div>

                <div className="pagination__right">
                    <button className="nav-btn">{"<"}</button>

                    <span className="page active">1</span>
                    <span className="page">2</span>
                    <span className="page">3</span>
                    <span className="dots">...</span>
                    <span className="page">15</span>
                    <span className="page">16</span>

                    <button className="nav-btn">{">"}</button>
                </div>
            </div>

            <FilterModal
                show={showFilter}
                onClose={() => setShowFilter(false)}
                onReset={handleResetFilter}
                onApply={handleApplyFilter}
            />
        </div>
    )
}

export default UsersPage;