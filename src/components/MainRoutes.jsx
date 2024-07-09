// import DaisyNav from './DaisyNav';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainRoutes = () => {
  return (
    <div className="m-4 ">
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoutes;
