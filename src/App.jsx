import React from "react";
import "./App.css";

import User from "./User";
import withUserId from "./withUserId";

const CurrentUser = withUserId(User);

function App() {
  return (
    <div className="app">
      <CurrentUser userId={1} />
      <CurrentUser userId={2} />
      <CurrentUser userId={3} />
    </div>
  );
}

export default App;
