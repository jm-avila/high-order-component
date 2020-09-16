import React from "react";

export default function ({ user }) {
  return (
    <div>
      <strong>
        {user.name} ({user.username})
      </strong>
      <span>{user.email}</span>
    </div>
  );
}
