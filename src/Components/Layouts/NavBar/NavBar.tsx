import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/whiteLogo.webp";
import { IoMdCart } from "react-icons/io";
import CenterAlign from "../../Helper/CenterAlign";
const NavBar = () => {
  const routes = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-black lg:py-4 titillium-web-regular">
      <CenterAlign>
        <div className="flex items-center justify-between ">
          <div className="flex items-center lg:gap-x-11">
            <Link to={"/"}><img src={logo} alt="logo" /></Link>

            <ul className="flex items-center lg:gap-10 text-white">{routes}</ul>
          </div>

          <Link to={"/cart"} className="relative">
            <IoMdCart  className="text-white text-3xl"/>{" "}
            <span className="text-white bg-red-600 rounded-full h-5 w-5 inline-block to-center absolute -top-3 -right-3">5</span>
          </Link>
        </div>
      </CenterAlign>
    </div>
  );
};

export default NavBar;
