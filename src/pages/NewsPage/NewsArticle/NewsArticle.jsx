import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./NewsArticle.module.scss";
import newsImage from "../../../assets/images/news/newspreview.jpg";

export default function NewsArticle({
  img,
  alt,
  header,
  p,
  date,
  href,
  id,
  className,
}) {
  let location = useLocation();
  return (
    <div className={cn([styles.newsArticle, className])}>
      <img src={newsImage} alt={alt} className={styles.newsImg} />
      <div className={styles.newsDescription}>
        <h2 className={styles.newsHeader}>{header}</h2>
        <p className={styles.newsParagraph}>{p}</p>
        <div className={styles.newsBottomContainer}>
          <p className={styles.newsDate}>{date}</p>
          <Link
            to={`/${location.pathname.split("/")[1]}/${id}`}
            className={styles.newsLink}
          >
            Читать
          </Link>
        </div>
      </div>
    </div>
  );
}
