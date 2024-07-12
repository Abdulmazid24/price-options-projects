import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainRoutes = () => {
  return (
    <div className="m-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoutes;
