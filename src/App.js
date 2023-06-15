import React from "react";
import User from "./components/user/User";
import Skills from "./components/skills/Skills";
import Profil from "./components/profil/Profil";
import FormationsExperiences from "./components/formations/FormationsExperiences";
import DarkMode from "./components/dark/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

function App() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="App">
      <div className="grid_container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
            <button onClick={handlePrint}>
              <FontAwesomeIcon icon={faPrint} style={{ color: "#f7f7f8" }} />
            </button>
          </div>

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
