import { Outlet } from "react-router";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";

const Root = () => {
  return(
    <div className="bg-[#d8d8d844]">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

export default Root;
