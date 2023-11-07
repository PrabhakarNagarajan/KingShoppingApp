import Button from "../Button/Button.components";

import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  return (
    <div className="cart-drop-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
