import React from "react";

import styles from "./Footer.module.scss";

import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterLinksContainer from "./FooterLinksContainer/FooterLinksContainer";
import FooterPaymentMethods from "./FooterPaymentMethods/FooterPaymentMethods";
import FooterSocialNetworks from "./FooterSocialNetworks/FooterSocialNetworks";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <FooterCopyright />

        <div className={styles["footer__right-side"]}>
          <FooterLinksContainer />

          <div className={styles["footer__right-bottom"]}>
            <FooterSocialNetworks />
            <FooterPaymentMethods />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
