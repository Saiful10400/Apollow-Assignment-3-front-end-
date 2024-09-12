import { Outlet } from "react-router";
import NavBar from "../Layouts/NavBar/NavBar";

const Root = () => {
  return(
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
};

export default Root;
