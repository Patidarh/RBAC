import React, { useEffect } from "react";

function UserTable({ users, setUsers, roles, addLog }) {
  useEffect(() => {
    // Fetch user images from a placeholder API
    const updatedUsers = users.map((user) => ({
      ...user,
      image: `https://via.placeholder.com/50?text=${user.name.charAt(0)}`,
    }));
    setUsers(updatedUsers);
  }, [users, setUsers]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    addLog(`Deleted user with ID ${id}`);
  };

  return (
    <div className="table-container">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.image} alt={user.name} className="profile-pic" />
              </td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
