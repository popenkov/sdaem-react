import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNewsList } from "../../redux/actions/newsList";
import styles from "./News.module.scss";
import NewsArticle from "./NewsArticle/NewsArticle.jsx";
import NewsHeader from "./NewsHeader/NewsHeader.tsx";
import NewPagination from "../../components/NewPagination/NewPagination";

function News() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);

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
      <NewPagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={10}
        pageSize={1}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}

export default News;
