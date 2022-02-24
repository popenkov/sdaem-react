import styles from "./FooterPaymentMethods.module.scss";

import BelkartIcon from "../../../assets/images/footer/belkart.png";
import MastercardSecureIcon from "../../../assets/images/footer/mastercard-securecode.png";
import MastercardIcon from "../../../assets/images/footer/mastercard.png";
import VisaIcon from "../../../assets/images/footer/visa.png";
import VisaVerifiedIcon from "../../../assets/images/footer/verified-by-visa.png";
import WebpayIcon from "../../../assets/images/footer/webpay.png";

function FooterPaymentMethods() {
  return (
    <ul className={styles["footer__payment-methods-list"]}>
      <li className={styles["footer__payment-methods-item"]}>
        <img src={VisaIcon} alt="Иконка Visa"></img>
      </li>
      <li className={styles["footer__payment-methods-item"]}>
        <img src={WebpayIcon} alt="Иконка Webpay"></img>
      </li>
      <li className={styles["footer__payment-methods-item"]}>
        <img src={VisaVerifiedIcon} alt="Иконка Visa Verified"></img>
      </li>
      <li className={styles["footer__payment-methods-item"]}>
        <img src={MastercardIcon} alt="Иконка Mastercard"></img>
      </li>
      <li className={styles["footer__payment-methods-item"]}>
        <img src={MastercardSecureIcon} alt="Иконка Mastercard Secure"></img>
      </li>
      <li className={styles["footer__payment-methods-item"]}>
        <img src={BelkartIcon} alt="Иконка Belkart"></img>
      </li>
    </ul>
  );
}

export default FooterPaymentMethods;
