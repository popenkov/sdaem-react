import React from "react";
import styles from "./NewsBody.module.scss";
import newsDecoration from "../../../assets/images/news-detailed-decoration.png";

function NewsBody({ img, title, body }) {
  return (
    <div className={styles.body}>
      <img
        className={styles.imgDecoration}
        width="62"
        src={newsDecoration}
        alt="decoration"
      />
      <img src={img} alt={title} className={styles.img} />
      <p className={styles.text}>{body}</p>
    </div>
  );
}

export default NewsBody;
