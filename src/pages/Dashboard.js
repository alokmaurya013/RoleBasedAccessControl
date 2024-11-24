import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div className="p-6 bg-gray-50">
    {/* Header Section */}
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
      Admin Dashboard
    </h1>
    <p className="text-gray-600 text-center mb-8">
      Welcome to the Role-Based Access Control (RBAC) Dashboard. Use the options below to manage users, roles, and permissions efficiently.
    </p>

    {/* Action Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Manage Users */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Manage Users
          </h2>
          <p className="text-gray-700 mb-4">
            To manage the users (add, edit, or delete users), click on the button below.
          </p>
        </div>
        <Link
          to="/users"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-center block"
        >
          Manage Users
        </Link>
      </div>

      {/* Manage Roles */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Manage Roles
          </h2>
          <p className="text-gray-700 mb-4">
            To manage roles (admin, editor, viewer, etc.) and assign permissions (read, write, delete), click on the button below.
          </p>
        </div>
        <Link
          to="/roles"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded text-center block"
        >
          Manage Roles
        </Link>
      </div>
    </div>

    {/* Additional Info Section */}
    <div className="mt-12 bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Dynamic Permissions
      </h2>
      <p className="text-gray-600">
        Assign or modify permissions dynamically for roles to ensure seamless access control for your users. Navigate to the "Manage Roles" section to customize role-based permissions.
      </p>
    </div>
  </div>
);

export default Dashboard;
