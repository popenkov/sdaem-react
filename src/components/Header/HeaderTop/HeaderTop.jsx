import LinkComponent from "../../LinkComponent/LinkComponent";

import { ReactComponent as HeartSvg } from "../../../assets/svg/heart-stroke.svg";
import styles from "./HeaderTop.module.scss";

function HeaderTop({ linksTop }) {
  return (
    <div className={styles.header__top}>
      <div className={styles["header__top-container"]}>
        <nav className={styles.header__nav}>
          <ul className={styles["header__top-nav-list"]}>
            {linksTop &&
              linksTop.map((link) => {
                return (
                  <LinkComponent
                    href={link.href}
                    name={link.name}
                    underlined={link.underlined}
                    top={link.top}
                    bottom={link.bottom}
                    yellowMap={link.yellowMap}
                    key={link.name}
                  />
                );
              })}
          </ul>
        </nav>

        <div className={styles["header__top-user-menu"]}>
          <a href="" className={styles["header__top-user-favourites"]}>
            Закладки
            <HeartSvg className={styles["header__top-logo"]} />
          </a>
          <a href="" className={styles["header__top-user-login"]}>
            Вход и регистрация
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
