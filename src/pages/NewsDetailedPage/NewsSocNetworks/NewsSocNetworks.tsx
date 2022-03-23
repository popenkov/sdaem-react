import React from "react";
import styles from "./NewsSocNetworks.module.scss";
import { ReactComponent as VkIcon } from "../../../assets/svg/vk.svg";
import { ReactComponent as FBIcon } from "../../../assets/svg/fb.svg";
import { ReactComponent as ViberIcon } from "../../../assets/svg/viber.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/svg/telegram.svg";
import { ReactComponent as WhatsappIcon } from "../../../assets/svg/whatsapp.svg";

function NewsSocNetworks() {
  return (
    <div className={styles.headerSocialNetworksContainer}>
      <p className={styles.headerSocialNetworksTitle}>Поделиться</p>
      <ul className={styles.headerSocialNetworksList}>
        <li className={styles.headerSocialNetworksItem}>
          <a href="vk.com" className={styles.headerSocialNetworksLink}>
            <VkIcon />
          </a>
        </li>
        <li className={styles.headerSocialNetworksItem}>
          <a href="vk.com" className={styles.headerSocialNetworksLink}>
            <FBIcon />
          </a>
        </li>
        <li className={styles.headerSocialNetworksItem}>
          <a href="vk.com" className={styles.headerSocialNetworksLink}>
            <ViberIcon />
          </a>
        </li>
        <li className={styles.headerSocialNetworksItem}>
          <a href="vk.com" className={styles.headerSocialNetworksLink}>
            <TelegramIcon />
          </a>
        </li>
        <li className={styles.headerSocialNetworksItem}>
          <a href="vk.com" className={styles.headerSocialNetworksLink}>
            <WhatsappIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NewsSocNetworks;
