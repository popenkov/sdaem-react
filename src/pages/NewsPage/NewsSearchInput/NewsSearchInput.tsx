import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNewsList } from "../../../redux/actions/newsList";
import cn from "classnames";
import SearchButton from "../../../components/UI/SearchButton/SearchButton.tsx";
import styles from "./NewsSearchInput.module.scss";

function NewsSearchInput({ style }) {
  const dispatch = useDispatch();
  const searchInput = React.useRef(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchInput.current.value);

    //json-sever не предлагает фильтрацию на сервере по подстроке
    axios.get("http://localhost:3001/newsOverview").then(({ data }) => {
      console.log(data);
      const filteredData = data.filter((news) => {
        return news.header.includes(searchInput.current.value);
      });
      console.log(filteredData);
      /* dispatch(setNewsList(data)); */
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
    </form>
  );
}

export default NewsSearchInput;
