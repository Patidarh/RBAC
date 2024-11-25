import React, { useState } from "react";
import UserTable from "./components/UserTable";
import RoleTable from "./components/RoleTable";
import SearchBar from "./components/SearchBar";
import ActivityLog from "./components/ActivityLog";
import "./styles.css"; // Import CSS here

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "Admin", status: "Active", image: "" },
    { id: 2, name: "Bob", role: "Editor", status: "Inactive", image: "" },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const [logs, setLogs] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.className = darkMode ? "" : "dark-mode";
  };

  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, { id: prevLogs.length + 1, message }]);
  };

  return (
    <div className="app">
      <h1>RBAC Management</h1>
      <div className="dark-mode-icon" onClick={toggleDarkMode}>
        {darkMode ? "🌞" : "🌙"}
      </div>
      <SearchBar setUsers={setUsers} />
      <div className="tables">
        <UserTable users={users} setUsers={setUsers} roles={roles} addLog={addLog} />
        <RoleTable roles={roles} setRoles={setRoles} addLog={addLog} />
      </div>
      <ActivityLog logs={logs} />
    </div>
  );
}

export default App;
