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
            const res = await axios.get("https://mocki.io/v1/5b30cd42-1916-438a-9aa0-4772a9ae43e0");
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
                        <h3>{user.fullName}</h3>
                        <p>{user.id}</p>
                    </div>

                    <div className="tier">
                        <p>User’s Tier</p>
                        <div className="stars">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    fill={i < user.tier ? "#f5c342" : "none"}
                                    stroke="#f5c342"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h3>{user.balance}</h3>
                    <p>
                        {user.accountNumber}/{user.bank}
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

                    <section>
                        <h4>Personal Information</h4>
                        <div className="grid">
                            <div><p>Full Name</p><span>{user.fullName}</span></div>
                            <div><p>Phone Number</p><span>{user.personalInfo.phoneNumber}</span></div>
                            <div><p>Email Address</p><span>{user.personalInfo.email}</span></div>
                            <div><p>BVN</p><span>{user.personalInfo.bvn}</span></div>
                            <div><p>Gender</p><span>{user.personalInfo.gender}</span></div>
                            <div><p>Marital Status</p><span>{user.personalInfo.maritalStatus}</span></div>
                            <div><p>Children</p><span>{user.personalInfo.children}</span></div>
                            <div><p>Type of Residence</p><span>{user.personalInfo.residence}</span></div>
                        </div>
                    </section>

                    <section>
                        <h4>Education and Employment</h4>
                        <div className="grid">
                            <div><p>Level of Education</p><span>{user.education.level}</span></div>
                            <div><p>Employment Status</p><span>{user.education.employmentStatus}</span></div>
                            <div><p>Sector of Employment</p><span>{user.education.sector}</span></div>
                            <div><p>Duration of Employment</p><span>{user.education.duration}</span></div>
                            <div><p>Office Email</p><span>{user.education.officeEmail}</span></div>
                            <div><p>Monthly Income</p><span>{user.education.income}</span></div>
                            <div><p>Loan Repayment</p><span>{user.education.loanRepayment}</span></div>
                        </div>
                    </section>

                    <section>
                        <h4>Socials</h4>
                        <div className="grid">
                            <div><p>Twitter</p><span>{user.socials.twitter}</span></div>
                            <div><p>Facebook</p><span>{user.socials.facebook}</span></div>
                            <div><p>Instagram</p><span>{user.socials.instagram}</span></div>
                        </div>
                    </section>

                    <section>
                        <h4>Guarantor</h4>
                        <div className="grid">
                            <div><p>Full Name</p><span>{user.guarantor.fullName}</span></div>
                            <div><p>Phone Number</p><span>{user.guarantor.phoneNumber}</span></div>
                            <div><p>Email</p><span>{user.guarantor.email}</span></div>
                            <div><p>Relationship</p><span>{user.guarantor.relationship}</span></div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
};

export default UserDetails;
