import React from "react";
import cn from "classnames";
import SearchButton from "../../../components/UI/SearchButton/SearchButton";
import styles from "./NewsSearchInput.module.scss";

function NewsSearchInput({ style }) {
  const searchInput = React.useRef(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn([styles.NewsSearchForm, style])}
    >
      <input
        type="text"
        placeholder="Поиск по статьям"
        className={styles.NewsSearchInput}
        ref={searchInput}
      />
      <SearchButton style={styles.NewsSearchButton} />
    </form>
  );
}

export default NewsSearchInput;
