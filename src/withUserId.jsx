import React, { useState, useEffect } from "react";
import axios from "axios";

export default function (Component) {
  return ({ userId, ...props }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(({ data }) => setUser(data));
    }, [userId]);

    if (!user) return "Loading...";

    return <Component {...props} user={user} />;
  };
}
