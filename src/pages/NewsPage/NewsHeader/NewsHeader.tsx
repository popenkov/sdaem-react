import React from "react";
import { Breadcrumps } from "../../../components/index";
import NewsSearchInput from "../NewsSearchInput/NewsSearchInput";
import styles from "./NewsHeader.module.scss";
function NewsHeader() {
  return (
    <div className={styles.newsHeader}>
      <Breadcrumps title="Новости" subtitle="Новости" />

      <div className={styles.headerBottomContainer}>
        <h1 className={styles.pageTitle}>Новости</h1>
        <NewsSearchInput style={styles.newsSearchInput} />
      </div>
    </div>
  );
}

export default NewsHeader;
