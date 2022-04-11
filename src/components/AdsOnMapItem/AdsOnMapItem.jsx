import React from "react";
import cn from "classnames";
import styles from "./AdsOnMapItem.module.scss";
import { ReactComponent as MapMarker } from "../../assets/svg/map-marker.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";
import { ReactComponent as MetroIcon } from "../../assets/svg/metro.svg";
import { ReactComponent as HeartIcon } from "../../assets/svg/heart-stroke.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svg/phone.svg";
import { Link } from "react-router-dom";

function AdsOnMapItem({
  address,
  area,
  description,
  gold,
  img,
  moreLink,
  persons,
  price,
  rooms,
  subway,
  title,
}) {
  return (
    <article className={styles.item}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.description}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h3 className={styles.headerTitle}>{title}</h3>
            <p className={styles.headerAddress}>
              <MapMarker className={styles.svg} />
              {address}
            </p>
          </div>
          <div className={styles.price}>
            <p className={styles.priceValue}>{price}</p>
            <p className={styles.priceText}>за сутки</p>
          </div>
        </div>

        <div className={styles.descriptionTags}>
          <div className={styles.descriptionTag}>
            <UserIcon className={styles.descriptionTagSvg} />
            {persons}
          </div>
          <div className={styles.descriptionTag}>{rooms} комн.</div>
          <div className={styles.descriptionTag}>
            <MetroIcon className={styles.descriptionTagSvg} />
            {subway}
          </div>
          <div className={styles.descriptionTag}>{area}</div>
        </div>

        <p className={styles.descriptionText}>{description}</p>

        <div className={styles.footer}>
          <button className={styles.footerFavourites}>
            <HeartIcon />
          </button>
          <button className={styles.footerContacts}>
            <PhoneIcon />
            Контакты
          </button>
          <Link to="/" className={styles.moreDetailsLink}>
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}

export default AdsOnMapItem;
