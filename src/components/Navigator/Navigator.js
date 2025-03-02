import React, { useState } from "react";
import { Link, match } from "react-router-dom";
import styles from "./Navigator.module.scss";
import { projects } from "../../utils/Constants";

import UseMediaQuery from "../../hooks/useMediaQuery";

function Navigator({ projectId }) {
  console.log(projectId);

  const navigator = (
    <div className={styles.navigator}>
      {projects.map((project, i) => (
        <Link to={i !== projectId ? `/summary/${i}` : `/intro`}>
          <div>{i !== projectId ? project.description.type : "Home"}</div>
        </Link>
      ))}
    </div>
  );

  return <>{navigator}</>;
}

export default Navigator;
