import React from "react";
import HeaderLink from "../../LinkComponent/LinkComponent";

import styles from "./HeaderBottom.module.scss";
import AddAdvButton from "../../UI/AddAdvButton/AddAdvButton";
import Logo from "../../UI/Logo/Logo";
import { LinkComponentProps } from "../../../../interfaces/footer";

function HeaderBottom({ linksBottom }) {
  return (
    <div className={styles.headerBottom}>
      <div className={styles.headerBottomContainer}>
        <Logo />

        <ul className={styles.headerBottomList}>
          {linksBottom &&
            linksBottom.map((link: LinkComponentProps) => {
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
