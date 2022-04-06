import React from "react";
import styles from "./AdsOnMapItem.module.scss";

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
            <p className={styles.headerAddress}>{address}</p>
          </div>
          <div className={styles.price}>
            <p>{price}</p>
            <p>за сутки</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AdsOnMapItem;
