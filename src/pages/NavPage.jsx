
import Nav from "../components/nav/Nav";
import { Outlet } from "react-router-dom";
import AdvantageSolar from "../components/catalogueOutPuts.jsx/AdvantageSolar";


function NavPage() {
  return (
    <div>
      <div className=" sticky top-0 z-20 bg-white">
        <Nav />
      </div>

      <Outlet />
      <AdvantageSolar />
    </div>
  );
}

export default NavPage;
