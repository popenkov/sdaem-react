import React from "react";
import HeaderLink from "../../LinkComponent/LinkComponent.tsx";

import styles from "./HeaderBottom.module.scss";
import AddAdvButton from "../../UI/AddAdvButton/AddAdvButton.tsx";
import Logo from "../../UI/Logo/Logo.tsx";

function HeaderBottom({ linksBottom }) {
  return (
    <div className={styles.headerBottom}>
      <div className={styles.headerBottomContainer}>
        <Logo />

        <ul className={styles.headerBottomList}>
          {linksBottom &&
            linksBottom.map((link) => {
              return (
                <li key={link.name}>
                  <HeaderLink
                    href={link.href}
                    id={link.id}
                    name={link.name}
                    underlined={link.underlined}
                    bottom={true}
                    yellowMap={link.yellowMap}
                  />
                </li>
              );
            })}
        </ul>

        {/* <a className={styles.headerBottomAddAdv}>+ Разместить объявление</a> */}
        <AddAdvButton />
      </div>
    </div>
  );
}

export default HeaderBottom;
