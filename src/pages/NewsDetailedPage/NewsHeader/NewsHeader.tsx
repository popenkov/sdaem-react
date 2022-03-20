import React from "react";
import { Breadcrumps } from "../../../components";
import NewsSocNetworks from "../NewsSocNetworks/NewsSocNetworks";
import styles from "./NewsHeader.module.scss";

function NewsHeader({ title, date }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Breadcrumps
          title="Новости"
          subtitle="Линия Сталина: суровый отдых в усадьбах на сутки"
        />
        <h1 className={styles.headerTitle}>{title}</h1>

        <div className={styles.headerBottomContainer}>
          <p className={styles.headerDate}>{date}</p>

          <NewsSocNetworks />
        </div>
      </div>
    </div>
  );
}

export default NewsHeader;
