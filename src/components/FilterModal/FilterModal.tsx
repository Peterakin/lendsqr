import "./FIlterModal.scss"

interface FilterModalProps {
    show: boolean;
    onClose: () => void;
    onApply: (filters: any) => void;
    onReset: () => void;
}

const FilterModal = ({ show, onClose, onApply, onReset }: FilterModalProps) => {
    if (!show) return null;

    return (
        <div className="filter__overlay" onClick={onClose}>
            <div className="filter__modal" onClick={(e) => e.stopPropagation()}>

                <label>Organization </label>
                <select>
                    <option value="">Select</option>
                    <option value="Lendsqr">Lendsqr</option>
                    <option value="Irorun">Irorun</option>
                </select>
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Email</label>
                <input type="text" placeholder="Email" />
                <label>Date</label>
                <input type="date" />
                <label>Phone Number</label>
                <input type="tel" placeholder="Phonenumber" />

                <label>Status</label>
                <select>
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Option">Option</option>
                    <option value="Blacklisted">Blacklisted</option>
                </select>

                <div className="filter__buttons">
                    <button className="reset" onClick={onReset}>
                        Reset
                    </button>
                    <button className="apply" onClick={() => onApply({})}>
                        Filter
                    </button>
                </div>
            </div>

        </div >
    )
}

export default FilterModal;