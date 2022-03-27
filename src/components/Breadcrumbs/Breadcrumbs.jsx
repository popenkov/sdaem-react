import React from "react";
import styles from "./Breadcrumbs.module.scss";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";

function Breadcrumbs({ title, subtitle }) {
  return (
    <div className={styles.breadcrumps}>
      <div className={styles.homeIconContainer}>
        <HomeIcon className={styles.homeIcon} />
        {title ? <p className={styles.title}>{title}</p> : null}
      </div>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}

export default Breadcrumbs;
