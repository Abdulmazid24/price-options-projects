import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { RiMenuLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative">
      <div className=" bg-red-50 p-2 flex justify-between items-center">
        <span
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl font-bold"
        >
          {open === true ? <IoCloseSharp /> : <RiMenuLine></RiMenuLine>}
        </span>

        <ul className="font-bold hidden md:flex gap-5 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          type="button"
          className="px-6 py-2  border rounded dark:border-gray-800 bg-red-100 font-bold "
        >
          Details
        </button>
      </div>
      <ul
        // className={`font-bold md:hidden ${
        //   open === true ? '' : 'hidden'
        // } absolute bg-gray-300 p-1 rounded-sm shadow-lg duration-1000`}
        className={`font-semibold space-y-2 md:hidden ${
          open ? '' : '-top-60 duration-1000'
        } absolute duration-1000 bg-gray-300 p-1 rounded-sm shadow-lg `}
      >
        <li className="hover:bg-gray-500 hover:text-white hover:px-2 hover:font-bold hover:rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-gray-500 hover:text-white hover:px-2 hover:font-bold hover:rounded-lg ">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="hover:bg-gray-500 hover:text-white hover:px-2 hover:font-bold hover:rounded-lg ">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:bg-gray-500 hover:text-white hover:px-2 hover:font-bold hover:rounded-lg">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
