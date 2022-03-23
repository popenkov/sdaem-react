import React from "react";
import cn from "classnames";
import styles from "./SearchButton.module.scss";
import { ReactComponent as SearchIcon } from "../../../assets/svg/search.svg";

function SearchButton(/* { style } : string */) {
  return (
    <button className={cn([styles.SearchButton /* , style */])}>
      <SearchIcon className={styles.searchIcon} />
    </button>
  );
}

export default SearchButton;
