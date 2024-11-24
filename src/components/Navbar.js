import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Brand Name */}
        <h1 className="text-lg font-bold">
          <NavLink to="/" className="hover:text-gray-400 transition duration-200">
            RBAC Dashboard
          </NavLink>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-white hover:text-gray-400 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm">
            <li>
              <NavLink
                to="/"
                exact="true"
                className="hover:text-gray-300 transition duration-200"
                activeClassName="text-gray-200 underline"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="hover:text-gray-300 transition duration-200"
                activeClassName="text-gray-200 underline"
              >
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roles"
                className="hover:text-gray-300 transition duration-200"
                activeClassName="text-gray-200 underline"
              >
                Manage Roles
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="md:hidden fixed top-0 right-0 bg-gray-800 text-white h-full w-64 shadow-lg z-50">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              className="text-white hover:text-gray-400 focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="mt-4">
            <ul className="space-y-4 text-sm px-4">
              <li>
                <NavLink
                  to="/"
                  exact="true"
                  className="hover:text-gray-300 transition duration-200"
                  activeClassName="text-gray-200 underline"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className="hover:text-gray-300 transition duration-200"
                  activeClassName="text-gray-200 underline"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/roles"
                  className="hover:text-gray-300 transition duration-200"
                  activeClassName="text-gray-200 underline"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Manage Roles
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
