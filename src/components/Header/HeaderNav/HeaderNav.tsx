import React from "react";
import styles from "./HeaderNav.module.scss";
import LinkComponent from "../../LinkComponent/LinkComponent";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { LinkComponentProps } from "../../../../interfaces/footer";

function HeaderNav() {
  const linksTop = useTypedSelector(({ header }) => header.header.headerTop);

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        {linksTop &&
          linksTop.map((link: LinkComponentProps) => {
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
