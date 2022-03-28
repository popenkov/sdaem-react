import React from "react";

import styles from "./Footer.module.scss";

import FooterCopyright from "./FooterCopyright/FooterCopyright.jsx";
import FooterLinksContainer from "./FooterLinksContainer/FooterLinksContainer.jsx";
import FooterPaymentMethods from "./FooterPaymentMethods/FooterPaymentMethods";
import FooterSocialNetworks from "./FooterSocialNetworks/FooterSocialNetworks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <FooterCopyright />

        <div className={styles.footerRightSide}>
          <FooterLinksContainer />

          <div className={styles.footerRightBottom}>
            <FooterSocialNetworks />
            <FooterPaymentMethods />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
