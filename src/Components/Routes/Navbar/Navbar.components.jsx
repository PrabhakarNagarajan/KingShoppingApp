import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwonLogo } from "../../assets/image/crown.svg";
import "./Navbar.style.scss";

import { SignOutUser } from "../../../Utils/firebase/firebase.utils";
import CartIcon from "../../Cart-icon/cart-icon.componets";
import CartDropDown from "../../cart-dropdown/cart-dropdown.components";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    await SignOutUser();
  };
  console.log(isCartOpen);
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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
