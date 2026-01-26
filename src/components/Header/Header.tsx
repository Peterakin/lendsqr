import { Bell, ChevronDown, Search } from "lucide-react";
import "./Header.scss";

const Header = () => {
  return (
      <header className="header">
          <div className="header__left">
              <h2 className="header__logo">Lendsqr</h2>
          </div>

          <div className="header__search">
              <input type="text" placeholder="Search for anything" />
              <button>
                  <Search size={16} />
              </button>
          </div>

          <div className="header__right">
              <span><a href="">Docs</a></span>
              <Bell size={18} className="header__icon"/>
              
              <div className="header__user">
                  <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="header__profile"
                  />
                  <span className="header__text">Adedeji</span><ChevronDown/>
              </div>
          </div>
    </header>
  );
};

export default Header;
