import React from "react";
import "./formationsExperiences.css";
import dataFormations from "../../datas/Formations";
import Formations from "./Formations";
import Experiences from "./Experiences";
import dataExperiences from "../../datas/Experiences";

function FormationsExperiences() {
  return (
    <>
      <Formations datas={dataFormations} />
      <Experiences datas={dataExperiences} />
    </>
  );
}

export default FormationsExperiences;
