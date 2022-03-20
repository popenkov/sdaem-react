import React from "react";
//import LogoImg from "../../../assets/images/header-logo.png";
import styles from "./Logo.module.scss";
const LogoImg = require("../../../assets/images/header-logo.png") as string;

function Logo() {
  return <img src={LogoImg} alt="Логотип компании" className={styles.logo} />;
}

export default Logo;
