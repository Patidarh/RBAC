import React from "react";

function RoleTable({ roles, addLog }) {
  const handleEdit = (id) => {
    addLog(`Edited role with ID ${id}`);
  };

  return (
    <div className="table-container">
      <h2>Roles</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => handleEdit(role.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;
