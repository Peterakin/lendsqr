import "./FIlterModal.scss"



const FilterModal = () => {
    return (
        <div className="filter__overlay">
            <div className="filter__modal">

                <label>Organization </label>
                <select>
                    <option value="">Select</option>
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
                    <button className="reset">
                        Reset
                    </button>
                    <button className="apply">
                        Filter
                    </button>
                </div>
            </div>

        </div>
    )
}

export default FilterModal;