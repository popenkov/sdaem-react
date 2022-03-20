import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setNewsList } from "../../redux/actions/newsList";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./News.module.scss";
import NewsArticle from "./NewsArticle/NewsArticle";
import NewsHeader from "./NewsHeader/NewsHeader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NewsArticleProps } from "../../../interfaces/news";

function News() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/newsOverview").then(({ data }) => {
      dispatch(setNewsList(data));
    });
  }, []);

  const newsData = useTypedSelector(({ newsList }) => newsList.newsList);

  return (
    <main className={styles.newsPage}>
      <NewsHeader />
      <div className={styles.newsBody}>
        {newsData &&
          newsData.map((article: NewsArticleProps) => {
            return <NewsArticle {...article} key={article.id} />;
          })}
      </div>
      <Pagination />
    </main>
  );
}

export default News;
