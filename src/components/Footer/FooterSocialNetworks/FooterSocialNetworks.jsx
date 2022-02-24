import styles from "./FooterSocialNetworks.module.scss";

import { ReactComponent as InstagramSvg } from "../../../assets/svg/instagram-outlined.svg";
import { ReactComponent as FBSvg } from "../../../assets/svg/fb-outlined.svg";
import { ReactComponent as VKSvg } from "../../../assets/svg/vk-outlined.svg";

function FooterSocialNetworks() {
  return (
    <div className={styles["footer__social-networks"]}>
      <p>Мы в соцсетях</p>
      <ul className={styles["footer__social-networks-list"]}>
        <li className={styles["footer__social-networks-item"]}>
          <a>
            <InstagramSvg />
          </a>
        </li>
        <li className={styles["footer__social-networks-item"]}>
          <a>
            <VKSvg />
          </a>
        </li>
        <li className={styles["footer__social-networks-item"]}>
          <a>
            <FBSvg />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocialNetworks;
