import HeaderTopLink from "../HeaderTopLink/HeaderTopLink";

import { ReactComponent as HeartSvg } from "../../../assets/svg/heart-stroke.svg";
import styles from "./HeaderTop.module.scss";

function HeaderTop({ linksT }) {
  console.log(linksT);
  return (
    <div className={styles.header__top}>
      <div className={styles["header__top-container"]}>
        <nav className={styles.header__nav}>
          <ul className={styles["header__top-nav-list"]}>
            {linksT.map((link) => {
              return (
                <HeaderTopLink
                  href={link.href}
                  name={link.name}
                  underlined={link.underlined}
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
