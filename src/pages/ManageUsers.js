import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, editUser, deleteUser } from "../utils/api";
import Modal from "../components/Modal";
import Table from "../components/Table";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleAddUser = (newUser) => {
    addUser(newUser)
      .then((updatedUsers) => {
        setUsers(updatedUsers);
        setShowModal(false);
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  const handleEditUser = (id, updatedUser) => {
    editUser(id, updatedUser)
      .then((updatedUsers) => {
        setUsers(updatedUsers);
        setShowModal(false);
      })
      .catch((error) => console.error("Error editing user:", error));
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then((updatedUsers) => setUsers(updatedUsers))
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <header className="p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Manage Users
        </h1>
      </header>

      <main className="flex-grow p-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              setCurrentUser(null);
              setShowModal(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow"
          >
            Add User
          </button>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading users...</div>
        ) : users.length > 0 ? (
          <Table
            headers={["Name", "Role", "Status"]}
            rows={users.map((user) => ({
              id: user.id,
              name: user.name,
              role: user.role,
              status: user.status,
            }))}
            actions={[
              {
                type: "edit",
                label: "Edit",
                onClick: (user) => {
                  setCurrentUser(user);
                  setShowModal(true);
                },
              },
              {
                type: "delete",
                label: "Delete",
                onClick: (user) => handleDeleteUser(user.id),
              },
            ]}
            className="bg-white border border-gray-300 rounded-lg shadow-lg w-full overflow-x-auto"
          />
        ) : (
          <div className="text-center text-gray-500">
            No users found. Please add a user.
          </div>
        )}
      </main>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={currentUser ? "Edit User" : "Add User"}
        onSave={(data) => {
          currentUser
            ? handleEditUser(currentUser.id, data)
            : handleAddUser(data);
        }}
        initialData={currentUser}
      />
    </div>
  );
};

export default ManageUsers;
