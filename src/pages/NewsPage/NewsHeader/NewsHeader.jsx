import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs.jsx";
import NewsSearchInput from "../NewsSearchInput/NewsSearchInput.jsx";
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
