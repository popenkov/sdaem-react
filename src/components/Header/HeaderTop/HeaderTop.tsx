import styles from "./HeaderTop.module.scss";
import HeaderNav from "../HeaderNav/HeaderNav";
import { ReactComponent as HeartSvg } from "../../../assets/svg/heart-stroke.svg";

const HeaderTop = (): JSX.Element => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTopContainer}>
        <HeaderNav />

        <div className={styles.headerUserMenu}>
          <a href="" className={styles.headerFavourites}>
            Закладки
            <HeartSvg />
          </a>
          <a href="" className={styles.headerLogin}>
            Вход и регистрация
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
