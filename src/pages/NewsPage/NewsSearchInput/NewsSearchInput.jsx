import React, { useState } from "react";
import cn from "classnames";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNewsList } from "../../../redux/actions/newsList";
import SearchButton from "../../../components/UI/SearchButton/SearchButton.jsx";
import styles from "./NewsSearchInput.module.scss";

function NewsSearchInput({ style }) {
  const dispatch = useDispatch();
  const [isFound, setIsFound] = useState(true);
  const searchInput = React.useRef(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //json server не позволяет фильтровать по подстроке
    axios.get("http://localhost:3001/newsOverview").then(({ data }) => {
      const filteredData = data.filter(function (news) {
        return news.header
          .toLowerCase()
          .includes(searchInput.current.value.toLowerCase());
      });

      if (filteredData.length === 0) {
        setIsFound(false);
        dispatch(setNewsList(data));
      } else {
        setIsFound(true);
        dispatch(setNewsList(filteredData));
      }
    });
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
      {!isFound ? (
        <p className={styles.notFound}>По запросу ничего не найдено</p>
      ) : null}
    </form>
  );
}

export default NewsSearchInput;
