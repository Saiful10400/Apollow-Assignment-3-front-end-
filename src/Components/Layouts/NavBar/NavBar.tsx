import { NavLink } from "react-router-dom";
import logo from "../../../assets/whiteLogo.webp"
const NavBar = () => {
    const routes=<>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/products"}>Products</NavLink>
    <NavLink to={"/about-us"}>About Us</NavLink>
    <NavLink to={"/contact-us"}>Contact Us</NavLink>
    <NavLink to={"/dashboard"}>Dashboard</NavLink>
    </>
  return <div className="flex items-center bg-black minh">

  </div>;
};

export default NavBar;
