import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faTree,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
function Interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} /> Informatique
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faTree} /> Promenade en forêt
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faRecycle} /> Ecologie
        </li>
      </ul>
    </div>
  );
}

export default Interests;
