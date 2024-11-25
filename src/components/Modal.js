import React, { useState } from "react";

function Modal({ user, roles, onClose, onSave }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedUser);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit User</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select
            name="role"
            value={updatedUser.role}
            onChange={handleChange}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Status:
          <select
            name="status"
            value={updatedUser.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
