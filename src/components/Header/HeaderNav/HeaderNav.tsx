import React from "react";
import styles from "./HeaderNav.module.scss";
import { useSelector } from "react-redux";
import LinkComponent from "../../LinkComponent/LinkComponent.tsx";

function HeaderNav() {
  const linksTop = useSelector(({ header }) => header.header.headerTop);

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        {linksTop &&
          linksTop.map((link) => {
            return (
              <LinkComponent
                href={link.href}
                id={link.id}
                name={link.name}
                underlined={link.underlined}
                top={true}
                bottom={link.bottom}
                yellowMap={link.yellowMap}
                key={link.name}
              />
            );
          })}
      </ul>
    </nav>
  );
}

export default HeaderNav;
