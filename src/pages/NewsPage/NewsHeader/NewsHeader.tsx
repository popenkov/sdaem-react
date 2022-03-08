import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs.tsx";
import NewsSearchInput from "../NewsSearchInput/NewsSearchInput.tsx";
import styles from "./NewsHeader.module.scss";
function NewsHeader() {
  return (
    <div className={styles.newsHeader}>
      <Breadcrumbs subtitle="Новости" />

      <div className={styles.headerBottomContainer}>
        <h1 className={styles.pageTitle}>Новости</h1>
        <NewsSearchInput style={styles.newsSearchInput} />
      </div>
    </div>
  );
}

export default NewsHeader;
