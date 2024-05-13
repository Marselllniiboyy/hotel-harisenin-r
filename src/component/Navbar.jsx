import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-slate-100 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label className="btn btn-circle swap swap-rotate  btn-ghost lg:hidden">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>

            {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div> */}
            <ul className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Hotel Harisenin</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="dropdown dropdown-hover">
              <Link to="/services">Services</Link>
              <ul className="dropdown-content z-[1] mt-4 p-2 pt-0 bg-slate-100 border shadow pr-16">
                <li>
                  <Link to="/services/restaurant">Restaurant</Link>
                </li>
                <li>
                  <Link to="/services/service-inclueded">Service included</Link>
                </li>
                <li>
                  <Link to="/services/service-on-request">
                    Service on request
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/auth/signin"
            className="btn lg:px-8 px-6 bg-blue-600 text-white hover:bg-orange-200 border-none"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
