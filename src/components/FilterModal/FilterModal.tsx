import { useState } from "react";
import "./FIlterModal.scss";

interface Filters {
    organization: string;
    username: string;
    email: string;
    dateJoined: string;
    phone: string;
    status: string;
}

interface FilterModalProps {
    show: boolean;
    onClose: () => void;
    onApply: (filters: Filters) => void;
    onReset: () => void;
}

const FilterModal = ({
    show,
    onClose,
    onApply,
    onReset,
}: FilterModalProps) => {
    const [filters, setFilters] = useState<Filters>({
        organization: "",
        username: "",
        email: "",
        dateJoined: "",
        phone: "",
        status: "",
    });

    if (!show) return null;

    const handleReset = () => {
        setFilters({
            organization: "",
            username: "",
            email: "",
            dateJoined: "",
            phone: "",
            status: "",
        });
        onReset();
    };

    return (
        <div className="filter__overlay" onClick={onClose}>
            <div className="filter__modal" onClick={(e) => e.stopPropagation()}>
                <label>Organization</label>
                <select
                    value={filters.organization}
                    onChange={(e) =>
                        setFilters({ ...filters, organization: e.target.value })
                    }
                >
                    <option value="">Select</option>
                    <option value="Lendsqr">Lendsqr</option>
                    <option value="Irorun">Irorun</option>
                </select>

                <label>Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    value={filters.username}
                    onChange={(e) =>
                        setFilters({ ...filters, username: e.target.value })
                    }
                />

                <label>Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    value={filters.email}
                    onChange={(e) =>
                        setFilters({ ...filters, email: e.target.value })
                    }
                />

                <label>Date</label>
                <input
                    type="date"
                    value={filters.dateJoined}
                    onChange={(e) =>
                        setFilters({ ...filters, dateJoined: e.target.value })
                    }
                />

                <label>Phone Number</label>
                <input
                    type="tel"
                    placeholder="Phonenumber"
                    value={filters.phone}
                    onChange={(e) =>
                        setFilters({ ...filters, phone: e.target.value })
                    }
                />

                <label>Status</label>
                <select
                    value={filters.status}
                    onChange={(e) =>
                        setFilters({ ...filters, status: e.target.value })
                    }
                >
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Blacklisted">Blacklisted</option>
                </select>

                <div className="filter__buttons">
                    <button className="reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="apply" onClick={() => onApply(filters)}>
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
