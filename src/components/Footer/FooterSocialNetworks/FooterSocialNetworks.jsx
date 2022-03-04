import styles from "./FooterSocialNetworks.module.scss";

import { ReactComponent as InstagramSvg } from "../../../assets/svg/instagram-outlined.svg";
import { ReactComponent as FBSvg } from "../../../assets/svg/fb-outlined.svg";
import { ReactComponent as VKSvg } from "../../../assets/svg/vk-outlined.svg";

function FooterSocialNetworks() {
  return (
    <div className={styles.footerSocialNetworks}>
      <p className={styles.footerSocialTitle}>Мы в соцсетях</p>
      <ul className={styles.footerSocialNetworksList}>
        <li className={styles.footerSocialNetworksItem}>
          <a href="instagram.com">
            <InstagramSvg />
          </a>
        </li>
        <li className={styles.footerSocialNetworksItem}>
          <a href="vk.com">
            <VKSvg />
          </a>
        </li>
        <li className={styles.footerSocialNetworksItem}>
          <a href="facebook.com">
            <FBSvg />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocialNetworks;
