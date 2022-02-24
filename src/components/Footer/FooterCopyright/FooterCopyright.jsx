import React from "react";
import styles from "./FooterCopyright.module.scss";
import logoImg from "../../../assets/images/header-logo.png";

function FooterCopyright() {
  return (
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
        10.02.2016 <br /> 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 +37 5 29
        621 48 33, sdaem@sdaem.by Режим работы: 08:00-22:00
      </p>
    </div>
  );
}

export default FooterCopyright;
