import React from "react";
import User from "./components/user/User";
import Skills from "./components/skills/Skills";
import Profil from "./components/profil/Profil";
import FormationsExperiences from "./components/formations/FormationsExperiences";

function App() {
  return (
    <div className="App">
      <div className="grid_container">
        <div className="sidebar">
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
