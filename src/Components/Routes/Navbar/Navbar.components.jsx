import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwonLogo } from "../../assets/image/crown.svg";
import "./Navbar.style.scss";
import { UserContext } from "../../../Context/user.context";
import { SignOutUser } from "../../../Utils/firebase/firebase.utils";
import CartIcon from "../../Cart-icon/cart-icon.componets";
import CartDropDown from "../../cart-dropdown/cart-dropdown.components";
import { CartContext } from "../../../Context/cart.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  console.log(currentUser);

  const signOutHandler = async () => {
    await SignOutUser();
    setCurrentUser(null);
  };

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
