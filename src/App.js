import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedLister,
  createUserDocumentFromAuth,
} from "./Utils/firebase/firebase.utils";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Routes/Home/Home.component";
import Navigation from "./Components/Routes/Navbar/Navbar.components";
import Authenication from "./Components/Routes/Authenication/Authenication.component";
import Shop from "./Components/Routes/Shop/shop-components";
import CheckOut from "./Components/Routes/checkout/checkout.components";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedLister((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        dispatch(setCurrentUser(user)); // Pass the user to setCurrentUser
      } else {
        dispatch(setCurrentUser(null)); // No user, so pass null
      }
    });

    return unsubscribe;
  }, [dispatch]);

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
