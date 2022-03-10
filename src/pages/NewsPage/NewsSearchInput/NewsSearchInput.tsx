import React from "react";
import cn from "classnames";
import SearchButton from "../../../components/UI/SearchButton/SearchButton.tsx";
import styles from "./NewsSearchInput.module.scss";

function NewsSearchInput({ style }) {
  const searchInput = React.useRef(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchInput.current.value);
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
