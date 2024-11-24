const USERS_KEY = "users";

const fetchUsers = () => {
  return new Promise((resolve) => {
    const savedUsers = localStorage.getItem(USERS_KEY);
    resolve(savedUsers ? JSON.parse(savedUsers) : []); // Return saved users or an empty array
  });
};

const addUser = (newUser) => {
  return new Promise((resolve) => {
    fetchUsers().then((users) => {
      const updatedUsers = [...users, { id: Date.now(), ...newUser }];
      localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
      resolve(updatedUsers);
    });
  });
};

const editUser = (id, updatedUser) => {
  return new Promise((resolve) => {
    fetchUsers().then((users) => {
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      );
      localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
      resolve(updatedUsers);
    });
  });
};

const deleteUser = (id) => {
  return new Promise((resolve) => {
    fetchUsers().then((users) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
      resolve(updatedUsers);
    });
  });
};

export { fetchUsers, addUser, editUser, deleteUser };
