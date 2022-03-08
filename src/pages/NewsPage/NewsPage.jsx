import React from "react";
import styles from "./News.module.scss";
import NewsHeader from "./NewsHeader/NewsHeader.tsx";

function News() {
  return (
    <main className={styles.newsPage}>
      <NewsHeader />
    </main>
  );
}

export default News;
