import { Outlet } from "react-router";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Root = () => {
  return(
    <div className="bg-[#d8d8d844]">
      <NavBar/>
      <Outlet/>
      <Footer/>
      <ToastContainer />
    </div>
  )
};

export default Root;
