import styles from "./FooterPaymentMethods.module.scss";

import BelkartIcon from "../../../assets/images/footer/belkart.png";
import MastercardSecureIcon from "../../../assets/images/footer/mastercard-securecode.png";
import MastercardIcon from "../../../assets/images/footer/mastercard.png";
import VisaIcon from "../../../assets/images/footer/visa.png";
import VisaVerifiedIcon from "../../../assets/images/footer/verified-by-visa.png";
import WebpayIcon from "../../../assets/images/footer/webpay.png";

const iconsArr = [
  { src: VisaIcon, alt: "Иконка Visa" },
  { src: WebpayIcon, alt: "Иконка Webpay" },
  { src: VisaVerifiedIcon, alt: "Иконка Visa Verified" },
  { src: MastercardIcon, alt: "Иконка Mastercard" },
  { src: MastercardSecureIcon, alt: "Иконка Mastercard Secure" },
  { src: BelkartIcon, alt: "Иконка Belkart" },
];

function FooterPaymentMethods() {
  return (
    <ul className={styles.footerPaymentMethodsList}>
      {iconsArr &&
        iconsArr.map(({ src, alt }) => {
          return (
            <li key={alt} className={styles["footerPaymentMethodsItem"]}>
              <img src={src} alt={alt} />
            </li>
          );
        })}
    </ul>
  );
}

export default FooterPaymentMethods;
