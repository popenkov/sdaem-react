import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNewsList } from "../../redux/actions/newsList";
import Pagination from "../../components/Pagination/Pagination.jsx";
import styles from "./News.module.scss";
import NewsArticle from "./NewsArticle/NewsArticle.jsx";
import NewsHeader from "./NewsHeader/NewsHeader.jsx";

function News() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/newsOverview").then(({ data }) => {
      dispatch(setNewsList(data));
    });
  }, []);

  const newsData = useSelector(({ newsList }) => newsList.newsList);

  return (
    <main className={styles.newsPage}>
      <NewsHeader />
      <div className={styles.newsBody}>
        {newsData &&
          newsData.map((article) => {
            return <NewsArticle {...article} key={article.id} />;
          })}
      </div>
      <Pagination />
    </main>
  );
}

export default News;
