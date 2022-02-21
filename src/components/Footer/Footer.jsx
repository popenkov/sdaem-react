import React from "react";
import styles from "./Footer.module.scss";
import logoImg from "../../assets/images/header-logo.png";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__left-side"]}>
          <img
            className={styles["footer__logo"]}
            width="134"
            src={logoImg}
            alt="Sdaem.by logo"
          />
          <p className={styles["footer__logo-subtitle"]}>СДАЁМ БАЙ</p>
          <p className={styles["footer__address"]}>
            ИП Шушкевич Андрей Викторович УНП 192602485 Минским горисполкомом
            10.02.2016 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 +37 5 29
            621 48 33, sdaem@sdaem.by Режим работы: 08:00-22:00
          </p>
        </div>

        <div className={styles["footer__right-side"]}>
          <div className={styles["footer__right-top"]}></div>
          <div className={styles["footer__right-bottom"]}></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
