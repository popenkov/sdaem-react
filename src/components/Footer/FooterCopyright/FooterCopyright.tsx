import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "./FooterCopyright.module.scss";
/* import logoImg from "../../../assets/images/header-logo.png"; */
const logoImg = require("../../../assets/images/header-logo.png") as string;

const FooterCopyright: React.FC = () => {
  //TODO разобраться
  const footerCopyright: any = useTypedSelector(
    (state) => state.footer.footerCopyright
  );
  console.log(footerCopyright);
  return (
    <div className={styles.footerLeftSide}>
      <img
        className={styles.footerLogo}
        width="134"
        src={logoImg}
        alt="Sdaem.by logo"
      />
      <p className={styles.footerLogoSubtitle}>{footerCopyright.subtitle}</p>
      <p className={styles.footerAddress}>{footerCopyright.copyright}</p>
    </div>
  );
};

export default FooterCopyright;
