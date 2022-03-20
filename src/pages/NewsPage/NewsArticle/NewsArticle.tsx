import React from "react";
import { Link } from "react-router-dom";
import { NewsArticleProps } from "../../../../interfaces/news";
import styles from "./NewsArticle.module.scss";
//import newsImage from "../../../assets/images/news/newspreview.jpg";

const newsImage =
  require("../../../assets/images/news/newspreview.jpg") as string;

function NewsArticle({ img, alt, header, p, date, href }: NewsArticleProps) {
  console.log(href);
  return (
    <div className={styles.newsArticle}>
      <img src={newsImage} alt={alt} className={styles.newsImg} />
      <div className={styles.newsDescription}>
        <h2 className={styles.newsHeader}>{header}</h2>
        <p className={styles.newsParagraph}>{p}</p>
        <div className={styles.newsBottomContainer}>
          <p className={styles.newsDate}>{date}</p>
          <Link to={`/news/${href}`} className={styles.newsLink}>
            Читать
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
