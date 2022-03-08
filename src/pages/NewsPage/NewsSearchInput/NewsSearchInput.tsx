import React from "react";
import cn from "classnames";
import SearchButton from "../../../components/UI/SearchButton/SearchButton.tsx";
import styles from "./NewsSearchInput.module.scss";

function NewsSearchInput({ style }) {
  return (
    <form className={cn([styles.NewsSearchForm, style])}>
      <input
        type="text"
        placeholder="Поиск по статьям"
        className={styles.NewsSearchInput}
      />
      <SearchButton style={styles.NewsSearchButton} />
    </form>
  );
}

export default NewsSearchInput;
