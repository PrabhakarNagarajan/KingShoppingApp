import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Routes/Home/Home.component";
import Navigation from "./Components/Routes/Navbar/Navbar.components";
import Authenication from "./Components/Routes/Authenication/Authenication.component";
import Shop from "./Components/Routes/Shop/shop-components";
import CheckOut from "./Components/Routes/checkout/checkout.components";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="auth" element={<Authenication />} />
      </Route>
    </Routes>
  );
};

export default App;
