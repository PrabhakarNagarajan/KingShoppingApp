import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Routes/Home/Home.component";
import Navigation from "./Components/Routes/Navbar/Navbar.components";
import SignIn from "./Components/Routes/SignIn/SignIn.component";
const Shop = () => {
  return <h1>This is a shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
