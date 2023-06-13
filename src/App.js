import React from "react";
import User from "./components/user/User";

function App() {
  return (
    <div className="App">
      <div className="grid_container">
        <div className="sidebar">
          <User />
        </div>
        <div className="main">main</div>
      </div>
    </div>
  );
}

export default App;
