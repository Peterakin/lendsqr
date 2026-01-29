import "./UsersDetails.scss"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { User } from "../../types/user";
import { ArrowLeft, Star, Users } from "lucide-react";

const UserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [activeTab, setActiveTab] = useState("General Details");

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("https://mocki.io/v1/4f7dfa1c-b8a8-4501-ac33-87523f68808e");
            const foundUser = res.data.users.find((u: User) => u.id === id);
            setUser(foundUser);
        };

        fetchUser();
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="user-details">
            <div className="user-details__top">
                <button className="back-btn" onClick={() => navigate("/")}>
                    <ArrowLeft size={16} />
                    Back to Users
                </button>

                <div className="top-actions">
                    <button className="btn blacklist">Blacklist User</button>
                    <button className="btn activate">Activate User</button>
                </div>
            </div>

            <h2>User Details</h2>

            <div className="user-summary">
                <div className="left">
                    <div className="avatar"><Users /></div>

                    <div className="user-id">
                        <h3>{user.username}</h3>
                        <p>{user.id}</p>
                    </div>

                    <div className="tier">
                        <p>User’s Tier</p>
                        <div className="stars">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    stroke="#f5c342"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h3>$200,000</h3>
                    <p>
                        9912345678/Providus Bank
                    </p>
                </div>
            </div>

            <div className="tabs">
                {[
                    "General Details",
                    "Documents",
                    "Bank Details",
                    "Loans",
                    "Savings",
                    "App and System",
                ].map((tab) => (
                    <span
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            {activeTab === "General Details" && (
                <div className="details-content">
                    {/* Personal Info */}
                    <section>
                        <h4>Personal Information</h4>
                        <div className="grid">
                            <div><p>Full Name</p><span>{user.username}</span></div>
                            <div><p>Phone Number</p><span>{user.phone}</span></div>
                            <div><p>Email Address</p><span>{user.email}</span></div>
                            <div><p>BVN</p><span>07060780922</span></div>
                            <div><p>Gender</p><span>Male</span></div>
                            <div><p>Marital Status</p><span>Single</span></div>
                            <div><p>Children</p><span>None</span></div>
                            <div><p>Type of Residence</p><span>Parent's Apartments </span></div>
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h4>Education and Employment</h4>
                        <div className="grid">
                            <div><p>Level of Education</p><span>B.Sc</span></div>
                            <div><p>Employment Status</p><span>Employed</span></div>
                            <div><p>Sector of Employment</p><span>Fintech</span></div>
                            <div><p>Duration of Employment</p><span>2 years</span></div>
                            <div><p>Office Email</p><span>{user.email}</span></div>
                            <div><p>Monthly Income</p><span>$200,000.00-$400,000.00</span></div>
                            <div><p>Loan Repayment</p><span>40,000</span></div>
                        </div>
                    </section>

                    {/* Socials */}
                    <section>
                        <h4>Socials</h4>
                        <div className="grid">
                            <div><p>Twitter</p><span>@grace_effiom</span></div>
                            <div><p>Facebook</p><span>Grace Effiom</span></div>
                            <div><p>Instagram</p><span>@grace_effiom</span></div>
                        </div>
                    </section>

                    {/* Guarantor */}
                    <section>
                        <h4>Guarantor</h4>
                        <div className="grid">
                            <div><p>Full Name</p><span>Debby Ogana</span></div>
                            <div><p>Phone Number</p><span>07060780922</span></div>
                            <div><p>Email</p><span>debby@gmail.com</span></div>
                            <div><p>Relationship</p><span>Sister</span></div>
                        </div>
                        <div className="grid">
                            <div><p>Full Name</p><span>Debby Ogana</span></div>
                            <div><p>Phone Number</p><span>07060780922</span></div>
                            <div><p>Email</p><span>debby@gmail.com</span></div>
                            <div><p>Relationship</p><span>Sister</span></div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
};

export default UserDetails;
