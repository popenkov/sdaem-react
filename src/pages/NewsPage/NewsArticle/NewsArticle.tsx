import React from "react";
import styles from "./NewsArticle.module.scss";
import newsImage from "../../../assets/images/news/newspreview.jpg";

function NewsArticle({ img, alt, header, p, date, href }) {
  return (
    <div className={styles.newsArticle}>
      <img src={newsImage} alt={alt} className={styles.newsImg} />
      <div className={styles.newsDescription}>
        <h2 className={styles.newsHeader}>{header}</h2>
        <p className={styles.newsParagraph}>{p}</p>
        <div className={styles.newsBottomContainer}>
          <p className={styles.newsDate}>{date}</p>
          <a href={href} className={styles.newsLink}>
            Читать
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
