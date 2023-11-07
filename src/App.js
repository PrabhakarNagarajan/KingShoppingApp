import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Routes/Home/Home.component";
import Navigation from "./Components/Routes/Navbar/Navbar.components";
import Authenication from "./Components/Routes/Authenication/Authenication.component";
import Shop from "./Components/Routes/Shop/shop-components";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authenication />} />
      </Route>
    </Routes>
  );
};

export default App;
