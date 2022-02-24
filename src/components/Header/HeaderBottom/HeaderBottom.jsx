import React from "react";
import HeaderLink from "../../LinkComponent/LinkComponent";

import styles from "./HeaderBottom.module.scss";
import LogoImg from "../../../assets/images/header-logo.png";

function HeaderBottom({ linksBottom }) {
  return (
    <div className={styles.header__bottom}>
      <div className={styles["header__bottom-container"]}>
        <img
          src={LogoImg}
          alt="Логотип компании"
          className={styles["header__bottom-logo"]}
        ></img>

        <ul className={styles["header__bottom-list"]}>
          {linksBottom &&
            linksBottom.map((link) => {
              return (
                <li key={link.name}>
                  <HeaderLink
                    href={link.href}
                    name={link.name}
                    underlined={link.underlined}
                    top={link.top}
                    bottom={link.bottom}
                    yellowMap={link.yellowMap}
                  />
                </li>
              );
            })}
        </ul>

        <a className={styles["header__bottom-add-adv"]}>
          + Разместить объявление
        </a>
      </div>
    </div>
  );
}

export default HeaderBottom;
