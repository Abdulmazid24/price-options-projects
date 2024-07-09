// import DaisyNav from './DaisyNav';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainRoutes = () => {
  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoutes;
