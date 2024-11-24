import React, { useState, useEffect } from "react";
import { ROLES, PERMISSIONS } from "../utils/constants";

const ManageRoles = () => {
  const [roles, setRoles] = useState(() => {
    const savedRoles = JSON.parse(localStorage.getItem("roles"));
    return savedRoles || ROLES;
  });

  const [rolePermissions, setRolePermissions] = useState(() => {
    const savedPermissions = JSON.parse(localStorage.getItem("rolePermissions"));
    return savedPermissions || ROLES.reduce((acc, role) => ({ ...acc, [role]: [] }), {});
  });

  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
    localStorage.setItem("rolePermissions", JSON.stringify(rolePermissions));
  }, [roles, rolePermissions]);

  const handleTogglePermission = (role, permission) => {
    setRolePermissions((prev) => ({
      ...prev,
      [role]: prev[role].includes(permission)
        ? prev[role].filter((perm) => perm !== permission)
        : [...prev[role], permission],
    }));
  };

  const handleAddRole = () => {
    if (!newRole.trim() || roles.includes(newRole.trim())) return;
    setRoles((prev) => [...prev, newRole.trim()]);
    setRolePermissions((prev) => ({ ...prev, [newRole.trim()]: [] }));
    setNewRole("");
  };

  const handleEditRole = (oldRole, newRoleName) => {
    if (!newRoleName.trim() || roles.includes(newRoleName.trim())) return;
    setRoles((prev) =>
      prev.map((role) => (role === oldRole ? newRoleName.trim() : role))
    );
    setRolePermissions((prev) => {
      const { [oldRole]: permissions, ...rest } = prev;
      return { ...rest, [newRoleName.trim()]: permissions };
    });
  };

  const handleDeleteRole = (role) => {
    setRoles((prev) => prev.filter((r) => r !== role));
    setRolePermissions((prev) => {
      const { [role]: _, ...rest } = prev;
      return rest;
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Manage Roles
      </h1>

      {/* Add New Role */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Add a New Role
        </h2>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="Enter new role"
            className="border border-gray-300 rounded p-3 flex-grow focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleAddRole}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow"
          >
            Add Role
          </button>
        </div>
      </div>

      {/* List and Manage Roles */}
      <div className="space-y-6">
        {roles.map((role) => (
          <div
            key={role}
            className="bg-white border border-gray-300 rounded-lg shadow p-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{role}</h2>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const newRoleName = prompt(`Rename role "${role}" to:`, role);
                    if (newRoleName) handleEditRole(role, newRoleName);
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    window.confirm(`Are you sure you want to delete the role "${role}"?`) &&
                    handleDeleteRole(role)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {PERMISSIONS.map((perm) => (
                <label key={perm} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rolePermissions[role]?.includes(perm)}
                    onChange={() => handleTogglePermission(role, perm)}
                    className="rounded focus:ring focus:ring-blue-300"
                  />
                  <span className="text-gray-700">{perm}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRoles;
