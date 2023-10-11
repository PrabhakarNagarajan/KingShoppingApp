import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwonLogo } from "../../assets/image/crown.svg";
import "./Navbar.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <div>
          <Link to="/">
            <CrwonLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
