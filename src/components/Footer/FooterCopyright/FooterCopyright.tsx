import React from "react";
import { useSelector } from "react-redux";
import styles from "./FooterCopyright.module.scss";
/* import logoImg from "../../../assets/images/header-logo.png"; */
const logoImg = require("../../../assets/images/header-logo.png") as string;

const FooterCopyright: React.FC = () => {
  const footerCopyright = useSelector(({ footer }) => footer.footerCopyright);
  return (
    <div className={styles.footerLeftSide}>
      <img
        className={styles.footerLogo}
        width="134"
        src={logoImg}
        alt="Sdaem.by logo"
      />
      <p className={styles.footerLogoSubtitle}> {footerCopyright.subtitle}</p>
      <p className={styles.footerAddress}>{footerCopyright.copyright}</p>
    </div>
  );
};

export default FooterCopyright;
