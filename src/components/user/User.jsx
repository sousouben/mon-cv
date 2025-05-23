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
      <img src="./images/profile.png" alt="profile" className="avatar" />
      <h1 className="user__name">wpdevdesigns</h1>
      <p className="user__profession">Développeuse web et mobile</p>
      <div className="user__infos">
        <p className="user__info">
          <a href="https://maps.app.goo.gl/THeFYLEmpQg6qCeeA" target="__blanc">
            <FontAwesomeIcon icon={faHouse} />
            PARIS ET IDF
          </a>
        </p>
        <p className="user__info">
          <a href="tel:+33603703509">
            <FontAwesomeIcon icon={faPhone} /> 0603703509
          </a>
        </p>
        <p className="user__info">
          <a href="mailto:mouatakide@gmail.com">
            <FontAwesomeIcon icon={faAt} /> mouatakide@gmail.com
          </a>
        </p>
        <p className="user__info">
          <FontAwesomeIcon icon={faCalendarDays} /> Date de naissance: 20
          janvier 1982
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
