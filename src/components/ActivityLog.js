import React from "react";

function ActivityLog({ logs }) {
  return (
    <div className="activity-log">
      <h2>Activity Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityLog;
