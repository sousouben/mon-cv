import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faPaintBrush,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
function Interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faChalkboardTeacher} /> Formation &
          transmission
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faPaintBrush} /> Design UX/UI
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faLightbulb} /> Technologies web & innovation
        </li>
      </ul>
    </div>
  );
}

export default Interests;
