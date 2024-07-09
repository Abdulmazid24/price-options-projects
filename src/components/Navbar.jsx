import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { RiMenuLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className=" bg-gray-200 p-2 flex justify-between items-center">
        <h2 className="text-lg font-bold flex gap-2 items-center">
          <span
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl font-bold"
          >
            {open === true ? <IoCloseSharp /> : <RiMenuLine></RiMenuLine>}
          </span>
          Price Options
        </h2>
        <ul className="font-bold hidden md:flex gap-5">
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
          className="px-6 py-2 text-white border rounded dark:border-gray-800 bg-gray-500 font-bold "
        >
          Details
        </button>
      </div>
      <ul className="font-bold md:hidden">
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
    </nav>
  );
};

export default Navbar;
