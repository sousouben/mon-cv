import React from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faHouse,
  faPhone,
  faCalendarDays,
  faFlag,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function User() {
  return (
    <div className="user">
      <img src="./images/digital-agence.png" alt="profile" className="avatar" />
      <h1 className="user__name">Digital Agence</h1>
      <p className="user__profession">
        Développeuse Web Full Stack | Spécialiste WordPress & React | Formatrice
      </p>
      <div className="user__infos">
        <p className="user__info">
          <a href="https://maps.app.goo.gl/THeFYLEmpQg6qCeeA" target="__blanc">
            <FontAwesomeIcon icon={faHouse} />
            France
          </a>
        </p>
        <p className="user__info">
          <a href="tel:+33603703509">
            <FontAwesomeIcon icon={faPhone} /> 0603703509
          </a>
        </p>
        <p className="user__info">
          <a href="mailto:digitalagence28@gmail.com">
            <FontAwesomeIcon icon={faAt} /> digitalagence28@gmail.com
          </a>
        </p>
        <p className="user__info">
          <FontAwesomeIcon icon={faCalendarDays} /> Age: 43 ans
        </p>
        <p className="user__info">
          <FontAwesomeIcon icon={faFlag} /> Nationalité: Française
        </p>
        <p className="user__info">
          <FontAwesomeIcon icon={faCircleInfo} /> CV réalisé en REACT JS
        </p>
      </div>
    </div>
  );
}

export default User;
