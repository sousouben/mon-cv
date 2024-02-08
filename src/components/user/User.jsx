import React from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faHouse,
  faPhone,
  faCalendarDays,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

function User() {
  return (
    <div className="user">
      <img src="./images/profile.png" alt="profile" className="avatar" />
      <h1 className="user__name">Souad MOUATAKIDE</h1>
      <p className="user__profession">Développeuse web et mobile</p>
      <div className="user__infos">
        <p className="user__info">
          <a href="https://goo.gl/maps/RJnZeBcA8Kwdp4Wz9" target="__blanc">
            <FontAwesomeIcon icon={faHouse} /> 8 rue Henri Jumelle 28100 Dreux
          </a>
        </p>
        <p className="user__info">
          <a href="tel:+33603703509">
            <FontAwesomeIcon icon={faPhone} /> 0603703509
          </a>
        </p>
        <p className="user__info">
          <a href="mailto:s.mouatakide@laposte.net">
            <FontAwesomeIcon icon={faAt} /> s.mouatakide@laposte.net
          </a>
        </p>
        <p className="user__info">
          <FontAwesomeIcon icon={faCalendarDays} /> Date de naissance: 20
          janvier 1982
        </p>
        <p className="user__info">
          <FontAwesomeIcon icon={faFlag} /> Nationalité: Française
        </p>
      </div>
    </div>
  );
}

export default User;
